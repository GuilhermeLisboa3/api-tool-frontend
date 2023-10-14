import { type ListTools, listToolsUseCase } from '@/domain/use-cases/tools'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, toolsParams } from '@/tests/mocks'
import { UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('listToolsUseCase', () => {
  let sut: ListTools
  const { url } = httpClientParams
  const { dateOfCollection, description, dateOfDevolution, id, mechanicName, name, status } = toolsParams
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: [{ dateOfCollection, description, dateOfDevolution, id, mechanicName, name, status }] })
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

  it('should return tools if HttpClient return 200', async () => {
    const result = await sut()

    expect(result).toEqual([{ dateOfCollection, description, dateOfDevolution, id, mechanicName, name, status }])
  })
})
