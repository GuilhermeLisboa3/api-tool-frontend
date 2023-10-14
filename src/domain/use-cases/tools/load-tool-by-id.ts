import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'

type Setup = (url: string, httpClient: HttpClient) => LoadToolById
type Input = { id: number }
type Output = void
export type LoadToolById = (input: Input) => Promise<Output>

export const loadToolByIdUseCase: Setup = (url, httpClient) => async ({ id }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'get' })
  switch (statusCode) {
    case 200: return undefined
    default: throw new UnexpectedError()
  }
}
