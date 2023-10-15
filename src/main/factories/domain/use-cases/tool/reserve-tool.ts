import { makeHttpClient, makeApiUrl } from '@/main/factories/infra/http'
import { type ReserveTool, reserveToolUseCase } from '@/domain/use-cases/tools'

export const makeReserveTool = (): ReserveTool =>
  reserveToolUseCase(makeApiUrl('reserve/tool'), makeHttpClient())
