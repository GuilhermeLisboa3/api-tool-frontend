import { type UpdateStatusTool, updateStatusToolUseCase } from '@/domain/use-cases/tools'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, toolsParams } from '@/tests/mocks'
import { UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('updateStatusToolUseCase', () => {
  let sut: UpdateStatusTool
  const { url } = httpClientParams
  const { id, status } = toolsParams
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 204, data: null })
  })

  beforeEach(() => {
    sut = updateStatusToolUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id, status })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'put', body: { status } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ id, status })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return true if HttpClient return 204', async () => {
    const result = await sut({ id, status })

    expect(result).toBeTruthy()
  })
})
