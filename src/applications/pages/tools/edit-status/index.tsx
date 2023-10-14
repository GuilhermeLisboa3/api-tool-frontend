'use client'
import { Button } from '@/applications/components'
import { Form } from './style'
import './style.css'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React from 'react'
import { Input } from 'reactstrap'

export const EditStatus: React.FC = (): JSX.Element => {
  return (
    <Modal ariaHideApp={false} isOpen={true} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close'><AiOutlineClose/></button>
      <h2>Atualizar status</h2>
      <Form data-testid='edit-form'>
          <Input
            className="mb-3"
            type="select"
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
