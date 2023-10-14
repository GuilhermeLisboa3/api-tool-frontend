import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => LoadToolById
type Input = { id: number }
type Output = void
export type LoadToolById = (input: Input) => Promise<Output>

export const loadToolByIdUseCase: Setup = (url, httpClient) => async ({ id }) => {
  await httpClient.request({ url: `${url}/${id}`, method: 'get' })
}
