import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'

type Setup = (url: string, httpClient: HttpClient) => UpdateStatusTool
type Input = { id: number }
type Output = void
export type UpdateStatusTool = (input: Input) => Promise<Output>

export const updateStatusToolUseCase: Setup = (url, httpClient) => async ({ id }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'put' })
  switch (statusCode) {
    case 204: return undefined
    default: throw new UnexpectedError()
  }
}
