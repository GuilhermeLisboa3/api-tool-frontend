import { makeHttpClient, makeApiUrl } from '@/main/factories/infra/http'
import { type UpdateStatusTool, updateStatusToolUseCase } from '@/domain/use-cases/tools'

export const makeUpdateStatusTool = (): UpdateStatusTool =>
  updateStatusToolUseCase(makeApiUrl('/tool'), makeHttpClient())
