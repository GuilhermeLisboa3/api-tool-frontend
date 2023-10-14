import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => ReserveTool
type Input = {
  id: number
  dateOfCollection: string
  dateOfDevolution: string
  mechanicName: string
}
type Output = void
export type ReserveTool = (input: Input) => Promise<Output>

export const reserveToolUseCase: Setup = (url, httpClient) => async ({ id, dateOfCollection, dateOfDevolution, mechanicName }) => {
  await httpClient.request({ url: `${url}/${id}`, method: 'put', body: { dateOfCollection, dateOfDevolution, mechanicName } })
}
