import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => UpdateStatusTool
type Input = { id: number }
type Output = void
export type UpdateStatusTool = (input: Input) => Promise<Output>

export const updateStatusToolUseCase: Setup = (url, httpClient) => async ({ id }) => {
  await httpClient.request({ url: `${url}/${id}`, method: 'put' })
}
