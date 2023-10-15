'use client'
import { Button } from '@/applications/components'
import { Form } from './style'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React from 'react'
import { Input, Label } from 'reactstrap'

export const ReserverTool: React.FC = (): JSX.Element => {
  return (
    <Modal ariaHideApp={false} isOpen={false} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close'><AiOutlineClose/></button>
      <Form data-testid='edit-form'>
        <Label htmlFor='dateOfCollection'>Data de coleta</Label>
        <section>
          <Input id='dateOfCollection' type="date" autoComplete='false' required/>
          <Input id='timeOfCollection' type="time" autoComplete='false' required/>
        </section>
        <Label htmlFor='dateOfDevolution'>Data de coleta</Label>
        <section>
          <Input id='dateOfDevolution' type="date" autoComplete='false' required/>
          <Input id='timeOfDevolution' type="time" autoComplete='false' required/>
        </section>
        <div>
          <Label htmlFor='mechanicName'>Nome do mecânico</Label>
          <Input id='mechanicName' type="text" autoComplete='false' required/>
        </div>
        <Button>Reservar</Button>
      </Form>
    </Modal>
  )
}
