import React from 'react'
import { Container } from './style'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Button } from '@/applications/components'

export const CardTool: React.FC = (): JSX.Element => {
  return (
    <>
      <Container>
        <div>
          <p>Maquita - <span className='available'>Disponivel</span></p>
          <p><span>Data da coleta:</span> 10/03/2023 as 14:50</p>
          <p><span>Data da devolução:</span> 25/03/2023 as 15:40</p>
        </div>
        <div>
            <Button>Reservar</Button>
            <TiEdit/>
            <RiDeleteBinLine/>
        </div>
      </Container>
    </>
  )
}
