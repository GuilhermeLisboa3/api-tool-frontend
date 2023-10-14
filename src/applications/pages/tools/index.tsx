import React from 'react'
import { Container, CardTool, Button, Tools } from './styles'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdOutlineAdd } from 'react-icons/md'

export const Tool: React.FC = (): JSX.Element => {
  return (
    <>
      <Container>
        <h1>Loja de Ferramentas</h1>
        <Tools>
          <Button className='addButton'><MdOutlineAdd/> Adicionar</Button>
          <CardTool>
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
          </CardTool>
          <CardTool>
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
          </CardTool>
        </Tools>
      </Container>
    </>
  )
}
