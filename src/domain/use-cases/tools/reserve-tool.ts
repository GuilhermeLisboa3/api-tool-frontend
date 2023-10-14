import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'

type Setup = (url: string, httpClient: HttpClient) => ReserveTool
type Input = {
  id: number
  dateOfCollection: string
  dateOfDevolution: string
  mechanicName: string
}
type Output = boolean
export type ReserveTool = (input: Input) => Promise<Output>

export const reserveToolUseCase: Setup = (url, httpClient) => async ({ id, dateOfCollection, dateOfDevolution, mechanicName }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'put', body: { dateOfCollection, dateOfDevolution, mechanicName } })
  switch (statusCode) {
    case 204: return true
    default: throw new UnexpectedError()
  }
}
