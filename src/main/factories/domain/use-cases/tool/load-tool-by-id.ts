import { makeHttpClient, makeApiUrl } from '@/main/factories/infra/http'
import { type LoadToolById, loadToolByIdUseCase } from '@/domain/use-cases/tools'

export const makeLoadToolById = (): LoadToolById =>
  loadToolByIdUseCase(makeApiUrl('/tool'), makeHttpClient())
