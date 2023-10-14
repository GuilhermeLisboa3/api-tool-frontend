import { type AddTool, addToolUseCase } from '@/domain/use-cases/tools'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, toolsParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('addToolUseCase', () => {
  let sut: AddTool
  const { url } = httpClientParams
  const { description, name } = toolsParams
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = addToolUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ name, description })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'post', body: { name, description } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
