import { z } from 'zod'

let dateCollection: string

export const reserveToolFormSchema = z.object({
  dateOfCollection: z.string().min(1, 'Campo obrigatório').refine(date => {
    dateCollection = date
    return true
  }),
  timeOfCollection: z.string().min(1, 'Campo obrigatório').refine(time => {
    const currentDate = new Date()
    const dateTrans = new Date(dateCollection)
    if (dateTrans.getDate() + 1 > currentDate.getDate()) return true
    const timeSplit = time.split(':')
    const timeHours = parseInt(timeSplit[0], 10)
    const timeMinutes = parseInt(timeSplit[1], 10)
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    if (timeHours < hours) return false
    if (timeHours > hours) return true
    if (timeMinutes < minutes) return false
    return true
  }, 'Insira uma hora ou minuto maior que agora.'),
  dateOfDevolution: z.string()
    .min(1, 'Campo obrigatório')
    .refine(date => {
      if (dateCollection) {
        const dateDevolution = new Date(date)
        const dateCollectionTrans = new Date(dateCollection)
        const daysInMilliseconds = 1000 * 60 * 60 * 24
        const millisecondDifference = dateDevolution.getTime() - dateCollectionTrans.getTime()
        if (millisecondDifference / daysInMilliseconds > 15) {
          return false
        }
      }
      return true
    }, 'Só pode alugar por menos de 15 dias.'),
  timeOfDevolution: z.string().min(1, 'Campo obrigatório'),
  mechanicName: z.string().min(1, 'Campo obrigatório')
})

export type reserveToolFormData = z.infer<typeof reserveToolFormSchema>
