import { type HttpClient } from '@/domain/contracts/http'
import { UnexpectedError } from '../../errors'
import { type Tool } from '../../models'

type Setup = (url: string, httpClient: HttpClient<Tool[]>) => ListTools
type Output = Tool[]
export type ListTools = () => Promise<Output>

export const listToolsUseCase: Setup = (url, httpClient) => async () => {
  const { statusCode, data } = await httpClient.request({ url, method: 'get' })
  switch (statusCode) {
    case 200: return data!
    default: throw new UnexpectedError()
  }
}
