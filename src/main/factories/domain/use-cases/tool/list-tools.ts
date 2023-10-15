import { makeHttpClient, makeApiUrl } from '@/main/factories/infra/http'
import { type ListTools, listToolsUseCase } from '@/domain/use-cases/tools'

export const makeListTools = (): ListTools =>
  listToolsUseCase(makeApiUrl('/tools'), makeHttpClient())
