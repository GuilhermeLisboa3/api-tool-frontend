import { type ListTools, listToolsUseCase } from '@/domain/use-cases/tools'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams } from '@/tests/mocks'
import { UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('listToolsUseCase', () => {
  let sut: ListTools
  const { url } = httpClientParams
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: null })
  })

  beforeEach(() => {
    sut = listToolsUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut()

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
