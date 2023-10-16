import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'

type Setup = (url: string, httpClient: HttpClient) => UpdateStatusTool
type Input = { id: number, status: string }
type Output = boolean
export type UpdateStatusTool = (input: Input) => Promise<Output>

export const updateStatusToolUseCase: Setup = (url, httpClient) => async ({ id, status }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'put', body: { status } })
  switch (statusCode) {
    case 204: return true
    default: throw new UnexpectedError()
  }
}
