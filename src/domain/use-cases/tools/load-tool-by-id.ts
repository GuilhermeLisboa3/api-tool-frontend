import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'
import { type Tool } from '../../models'

type Setup = (url: string, httpClient: HttpClient<Tool>) => LoadToolById
type Input = { id: number }
type Output = Tool
export type LoadToolById = (input: Input) => Promise<Output>

export const loadToolByIdUseCase: Setup = (url, httpClient) => async ({ id }) => {
  const { statusCode, data } = await httpClient.request({ url: `${url}/${id}`, method: 'get' })
  switch (statusCode) {
    case 200: return data!
    default: throw new UnexpectedError()
  }
}
