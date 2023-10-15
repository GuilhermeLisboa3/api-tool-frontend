'use client'
import React, { useEffect, useState } from 'react'
import { Container, Tools } from './styles'
import { Button } from '@/applications/components'
import { CardTool } from './components'
import { EditStatus } from './edit-status'
import { AddTool } from './add-tool'
import { ReserverTool } from './reserver-tool'
import { type ListTools } from '@/domain/use-cases/tools'
import { type Tool as ToolModel } from '@/domain/models'

import { MdOutlineAdd } from 'react-icons/md'

type Props = { listTools: ListTools }

export const Tool: React.FC<Props> = ({ listTools }: Props): JSX.Element => {
  const [tools, setTools] = useState<ToolModel[]>([])

  useEffect(() => {
    listTools().then(tools => setTools(tools)).catch(error => console.log(error))
  })

  return (
    <>
      <Container>
        <h1>Loja de Ferramentas</h1>
        <Tools>
          <Button className='addButton'><><MdOutlineAdd/> Adicionar</></Button>
          { tools
            ? tools.map(tool => (
                <CardTool key={tool.id} tool={tool}/>
            ))
            : <h1>Não tem nenhuma ferramenta cadastrada.</h1>
          }
        </Tools>
      </Container>
      <EditStatus/>
      <AddTool/>
      <ReserverTool/>
    </>
  )
}
