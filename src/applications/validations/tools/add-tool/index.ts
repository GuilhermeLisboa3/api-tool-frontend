import { z } from 'zod'

export const addToolFormSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  description: z.string().min(1, 'Campo obrigatório')
})

export type addToolFormData = z.infer<typeof addToolFormSchema>
