import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'

type Setup = (url: string, httpClient: HttpClient<boolean>) => ListTools
type Output = void
export type ListTools = () => Promise<Output>

export const listToolsUseCase: Setup = (url, httpClient) => async () => {
  const { statusCode } = await httpClient.request({ url, method: 'get' })
  switch (statusCode) {
    case 200: return undefined
    default: throw new UnexpectedError()
  }
}
