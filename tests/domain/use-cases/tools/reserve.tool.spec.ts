import { type ReserveTool, reserveToolUseCase } from '@/domain/use-cases/tools'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, toolsParams } from '@/tests/mocks'
import { UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('reserveToolUseCase', () => {
  let sut: ReserveTool
  const { url } = httpClientParams
  const { id, mechanicName } = toolsParams
  const httpClient = mock<HttpClient>()
  const dateOfCollection = '2020-10-21'
  const dateOfDevolution = '2022-10-20'

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 204, data: null })
  })

  beforeEach(() => {
    sut = reserveToolUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id, mechanicName, dateOfCollection, dateOfDevolution })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'put', body: { mechanicName, dateOfCollection, dateOfDevolution } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ id, mechanicName, dateOfCollection, dateOfDevolution })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
