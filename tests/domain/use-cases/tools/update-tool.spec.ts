import { type UpdateStatusTool, updateStatusToolUseCase } from '@/domain/use-cases/tools'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, toolsParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('updateStatusToolUseCase', () => {
  let sut: UpdateStatusTool
  const { url } = httpClientParams
  const { id } = toolsParams
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = updateStatusToolUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'put' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
