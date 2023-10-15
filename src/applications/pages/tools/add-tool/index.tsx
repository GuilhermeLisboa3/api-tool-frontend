'use client'
import { Button } from '@/applications/components'
import { Form } from './style'
import './style.css'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React from 'react'
import { Input, Label } from 'reactstrap'

export const AddTool: React.FC = (): JSX.Element => {
  return (
    <Modal ariaHideApp={false} isOpen={true} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close'><AiOutlineClose/></button>
      <Form data-testid='edit-form'>
          <div>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' type="text" autoComplete='false' required/>
          </div>
          <div>
            <Label htmlFor='description'>Descrição</Label>
            <Input id='description' type="text" autoComplete='false' required/>
          </div>
          <Button>Salvar</Button>
      </Form>
    </Modal>
  )
}
