import { type AddTool, addToolUseCase } from '@/domain/use-cases/tools'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, toolsParams } from '@/tests/mocks'
import { UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('addToolUseCase', () => {
  let sut: AddTool
  const { url } = httpClientParams
  const { description, name } = toolsParams
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: null })
  })

  beforeEach(() => {
    sut = addToolUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ name, description })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'post', body: { name, description } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ name, description })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
