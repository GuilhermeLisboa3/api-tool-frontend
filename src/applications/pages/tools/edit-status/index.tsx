'use client'
import { Button, Spinner } from '@/applications/components'
import { Form } from './style'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React, { useContext, useState } from 'react'
import { Label } from 'reactstrap'
import { ToolContext } from '../contexts'
import { useForm } from 'react-hook-form'

export const EditStatus: React.FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)
  const { setShowUpdateStatus, showUpdateStatus, updateStatusTool, setReload, reload } = useContext(ToolContext)

  const handleUpdateStatusTool = async ({ status }: any): Promise<void> => {
    if (loading) return
    setLoading(true)
    try {
      await updateStatusTool({ id: showUpdateStatus.id, status })
      setReload(!reload)
      setLoading(false)
      setShowUpdateStatus({ id: 0, show: false })
    } catch (error) {
      setLoading(false)
    }
  }
  return (
    <Modal ariaHideApp={false} isOpen={showUpdateStatus.show} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close' onClick={() => setShowUpdateStatus({ id: 0, show: false })}><AiOutlineClose/></button>
      <Form onSubmit={handleSubmit(handleUpdateStatusTool)}>
          <Label htmlFor='status'>Atualizar status</Label>
          <select
            id='status'
            {...register('status')}
          >
            <option value='available'>
              Disponível
            </option>
            <option value='reserved'>
              Reservado
            </option>
            <option value='inUse'>
              Em Uso
            </option>
          </select>
          <Button type='submit'>{ loading ? <Spinner/> : 'Salvar'}</Button>
      </Form>
    </Modal>
  )
}
