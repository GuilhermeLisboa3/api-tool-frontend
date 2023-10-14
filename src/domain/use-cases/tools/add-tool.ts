import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => AddTool
type Input = { name: string, description: string }
type Output = void
export type AddTool = (input: Input) => Promise<Output>

export const addToolUseCase: Setup = (url, httpClient) => async ({ description, name }) => {
  await httpClient.request({ url, method: 'post', body: { description, name } })
}
