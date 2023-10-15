'use client'
import { Button } from '@/applications/components'
import { Form } from './style'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React from 'react'
import { Input, Label } from 'reactstrap'

export const EditStatus: React.FC = (): JSX.Element => {
  return (
    <Modal ariaHideApp={false} isOpen={false} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close'><AiOutlineClose/></button>
      <Form data-testid='edit-form'>
          <Label htmlFor='status'>Atualizar status</Label>
          <Input
            type="select"
            id='status'
          >
            <option value={'available'}>
              Disponível
            </option>
            <option value={'reserved'}>
              Reservado
            </option>
            <option value={'inUse'}>
              Em Uso
            </option>
          </Input>
          <Button>Salvar</Button>
      </Form>
    </Modal>
  )
}
