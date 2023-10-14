import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient<boolean>) => ListTools
type Output = void
export type ListTools = () => Promise<Output>

export const listToolsUseCase: Setup = (url, httpClient) => async () => {
  await httpClient.request({ url, method: 'get' })
}
