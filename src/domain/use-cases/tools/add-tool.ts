import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'

type Setup = (url: string, httpClient: HttpClient) => AddTool
type Input = { name: string, description: string }
type Output = void
export type AddTool = (input: Input) => Promise<Output>

export const addToolUseCase: Setup = (url, httpClient) => async ({ description, name }) => {
  const { statusCode } = await httpClient.request({ url, method: 'post', body: { description, name } })
  switch (statusCode) {
    case 200: return undefined
    default: throw new UnexpectedError()
  }
}
