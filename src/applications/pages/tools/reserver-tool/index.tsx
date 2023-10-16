'use client'
import { Button, Input } from '@/applications/components'
import { Form } from './style'
import { type reserveToolFormData, reserveToolFormSchema } from '@/applications/validations/tools/reserve-tool'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React, { useContext, useState } from 'react'
import { Label } from 'reactstrap'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ToolContext } from '../contexts'
import { formatMinDate } from '../../../utils'

export const ReserverTool: React.FC = (): JSX.Element => {
  const { showReserverTool, setShowReserverTool, reserveTool, setReload, reload } = useContext(ToolContext)
  const reserveToolForm = useForm<reserveToolFormData>({ resolver: zodResolver(reserveToolFormSchema) })
  const { handleSubmit, formState: { errors } } = reserveToolForm
  const [loading, setLoading] = useState(false)
  const currentDate = new Date()
  const date = formatMinDate(currentDate)

  const formatSubmitDate = async (date: string, time: string): Promise<string> => {
    return `${date}T${time}Z`
  }

  const handlerReserveTool = async ({ dateOfCollection, dateOfDevolution, mechanicName, timeOfCollection, timeOfDevolution }: reserveToolFormData): Promise<void> => {
    if (loading) return
    setLoading(true)
    try {
      const dateOfCollectionTrans = await formatSubmitDate(dateOfCollection, timeOfCollection)
      const dateOfDevolutionTrans = await formatSubmitDate(dateOfDevolution, timeOfDevolution)
      await reserveTool({ id: showReserverTool.id, mechanicName, dateOfCollection: dateOfCollectionTrans, dateOfDevolution: dateOfDevolutionTrans })
      setReload(!reload)
      setLoading(false)
      setShowReserverTool({ id: 0, show: false })
    } catch (error) {
      setLoading(false)
    }
  }

  return (
  <FormProvider {...reserveToolForm} >
    <Modal ariaHideApp={false} isOpen={showReserverTool.show} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close' onClick={() => setShowReserverTool({ id: 0, show: false })}><AiOutlineClose/></button>
      <Form onSubmit={handleSubmit(handlerReserveTool)}>
        <Label htmlFor='dateOfCollection'>Data de coleta</Label>
        <section>
          <div>
            <Input id='dateOfCollection' type="date" name='dateOfCollection' min={date}/>
            {errors.dateOfCollection && <span className='form-error'>{errors.dateOfCollection.message}</span>}
          </div>
          <div>
            <Input id='timeOfCollection' type="time" name='timeOfCollection'/>
            {errors.timeOfCollection && <span className='form-error'>{errors.timeOfCollection.message}</span>}
          </div>
        </section>
        <Label htmlFor='dateOfDevolution'>Data de coleta</Label>
        <section>
          <div>
            <Input id='dateOfDevolution' type="date" name='dateOfDevolution' min={date}/>
            {errors.dateOfDevolution && <span className='form-error'>{errors.dateOfDevolution.message}</span>}
          </div>
          <div>
            <Input id='timeOfDevolution' type="time" name='timeOfDevolution'/>
            {errors.timeOfDevolution && <span className='form-error'>{errors.timeOfDevolution.message}</span>}
          </div>
        </section>
        <div>
          <Input id='mechanicName' type="text" placeholder='Digite o nome do mecânico' name='mechanicName'/>
          {errors.mechanicName && <span className='form-error'>{errors.mechanicName.message}</span>}
        </div>
        <Button type='submit'>Reservar</Button>
      </Form>
    </Modal>
  </FormProvider>
  )
}
