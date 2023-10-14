import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => DeleteTool
type Input = { id: number }
type Output = void
export type DeleteTool = (input: Input) => Promise<Output>

export const deleteToolUseCase: Setup = (url, httpClient) => async ({ id }) => {
  await httpClient.request({ url: `${url}/${id}`, method: 'delete' })
}
