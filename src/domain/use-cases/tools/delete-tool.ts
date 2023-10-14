import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'

type Setup = (url: string, httpClient: HttpClient) => DeleteTool
type Input = { id: number }
type Output = boolean
export type DeleteTool = (input: Input) => Promise<Output>

export const deleteToolUseCase: Setup = (url, httpClient) => async ({ id }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'delete' })
  switch (statusCode) {
    case 204: return true
    default: throw new UnexpectedError()
  }
}
