import { makeHttpClient, makeApiUrl } from '@/main/factories/infra/http'
import { type AddTool, addToolUseCase } from '@/domain/use-cases/tools'

export const makeAddTool = (): AddTool =>
  addToolUseCase(makeApiUrl('/register'), makeHttpClient())
