'use client'
import React, { useEffect, useState } from 'react'
import { Container, Tools } from './styles'
import { Button } from '@/applications/components'
import { CardTool } from './components'
import { EditStatus } from './edit-status'
import { AddToolForm } from './add-tool'
import { ReserverTool } from './reserver-tool'
import { type UpdateStatusTool, type AddTool, type ListTools } from '@/domain/use-cases/tools'
import { type Tool as ToolModel } from '@/domain/models'

import { MdOutlineAdd } from 'react-icons/md'
import { ToolContext } from './contexts'

type Props = { listTools: ListTools, addTool: AddTool, updateStatusTool: UpdateStatusTool }

export const Tool: React.FC<Props> = ({ listTools, addTool, updateStatusTool }: Props): JSX.Element => {
  const [tools, setTools] = useState<ToolModel[]>([])
  const [showAddTool, setShowAddTool] = useState<boolean>(false)
  const [showUpdateStatus, setShowUpdateStatus] = useState({ id: 0, show: false })
  const [reload, setReload] = useState(false)

  useEffect(() => {
    listTools().then(tools => setTools(tools)).catch(error => console.log(error))
  }, [reload])

  return (
  <>
    <ToolContext.Provider value={{
      listTools: tools,
      showAddTool,
      setShowAddTool,
      addTool,
      reload,
      setReload,
      showUpdateStatus,
      setShowUpdateStatus,
      updateStatusTool
    }}>
      <Container>
        <h1>Loja de Ferramentas</h1>
        <Tools>
          <Button className='addButton' onClick={() => setShowAddTool(true)}><><MdOutlineAdd/> Adicionar</></Button>
          { tools.length > 0
            ? tools.map(tool => (
                <CardTool key={tool.id} tool={tool}/>
            ))
            : <p className='not-tools'>Não tem nenhuma ferramenta cadastrada.</p>
          }
        </Tools>
      </Container>
      <EditStatus/>
      <AddToolForm/>
      <ReserverTool/>
    </ToolContext.Provider>
  </>
  )
}
