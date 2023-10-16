'use client'
import { Button, Input, Spinner } from '@/applications/components'
import { Form } from './style'
import { ToolContext } from '../contexts'
import { type addToolFormData, addToolFormSchema } from '@/applications/validations/tools/add-tool'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React, { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const AddToolForm: React.FC = (): JSX.Element => {
  const addToolForm = useForm<addToolFormData>({ resolver: zodResolver(addToolFormSchema) })
  const { handleSubmit, formState: { errors } } = addToolForm
  const [loading, setLoading] = useState(false)
  const { setShowAddTool, showAddTool, addTool, setReload, reload } = useContext(ToolContext)

  const handleAddTool = async ({ name, description }: addToolFormData): Promise<void> => {
    if (loading) return
    setLoading(true)
    try {
      await addTool({ name, description })
      setReload(!reload)
      setLoading(false)
      setShowAddTool(false)
    } catch (error) {
      setLoading(false)
    }
  }
  return (
  <FormProvider {...addToolForm}>
    <Modal ariaHideApp={false} isOpen={showAddTool} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close' onClick={() => setShowAddTool(false)}><AiOutlineClose/></button>
      <Form onSubmit={handleSubmit(handleAddTool)}>
          <div>
            <Input id='name' type="text" placeholder='Nome' name='name'/>
            {errors.name && <span className='form-error'>{errors.name.message}</span>}
          </div>
          <div>
            <Input id='description' type="text" placeholder='Descrição' name='description'/>
            {errors.description && <span className='form-error'>{errors.description.message}</span>}
          </div>
          <Button type='submit'>{ loading ? <Spinner/> : 'Adicionar'}</Button>
      </Form>
    </Modal>
  </FormProvider>
  )
}
