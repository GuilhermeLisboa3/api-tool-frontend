import { makeHttpClient, makeApiUrl } from '@/main/factories/infra/http'
import { type DeleteTool, deleteToolUseCase } from '@/domain/use-cases/tools'

export const makeDeleteTool = (): DeleteTool =>
  deleteToolUseCase(makeApiUrl('/tool'), makeHttpClient())
