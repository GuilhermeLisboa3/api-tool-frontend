import { type ListTools, listToolsUseCase } from '@/domain/use-cases/tools'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('listToolsUseCase', () => {
  let sut: ListTools
  const { url } = httpClientParams
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = listToolsUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut()

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
