import React from 'react'
import { Container, Tools } from './styles'
import { MdOutlineAdd } from 'react-icons/md'
import { Button } from '@/applications/components'
import { CardTool } from './components'

export const Tool: React.FC = (): JSX.Element => {
  return (
    <>
      <Container>
        <h1>Loja de Ferramentas</h1>
        <Tools>
          <Button className='addButton'><><MdOutlineAdd/> Adicionar</></Button>
          <CardTool/>
        </Tools>
      </Container>
    </>
  )
}
