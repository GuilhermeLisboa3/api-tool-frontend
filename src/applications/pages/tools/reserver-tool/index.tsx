'use client'
import { Button, Input } from '@/applications/components'
import { Form } from './style'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React from 'react'
import { Label } from 'reactstrap'

export const ReserverTool: React.FC = (): JSX.Element => {
  return (
    <Modal ariaHideApp={false} isOpen={false} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close'><AiOutlineClose/></button>
      <Form>
        <Label htmlFor='dateOfCollection'>Data de coleta</Label>
        <section>
          <Input id='dateOfCollection' type="date" name='dateOfCollection'/>
          <Input id='timeOfCollection' type="time" name='timeOfCollection'/>
        </section>
        <Label htmlFor='dateOfDevolution'>Data de coleta</Label>
        <section>
          <Input id='dateOfDevolution' type="date" name='dateOfDevolution'/>
          <Input id='timeOfDevolution' type="time" name='timeOfDevolution'/>
        </section>
        <div>
          <Input id='mechanicName' type="text" placeholder='Digite o nome do mecânico' name='mechanicName'/>
        </div>
        <Button>Reservar</Button>
      </Form>
    </Modal>
  )
}
