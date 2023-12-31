'use client'
import React, { useEffect, useState } from 'react'
import { Container, Tools } from './styles'
import { Button } from '@/applications/components'
import { CardTool } from './components'
import { EditStatus } from './edit-status'
import { AddToolForm } from './add-tool'
import { ReserverTool } from './reserver-tool'
import { type UpdateStatusTool, type AddTool, type ListTools, type DeleteTool, type ReserveTool, type LoadToolById } from '@/domain/use-cases/tools'
import { type Tool as ToolModel } from '@/domain/models'

import { MdOutlineAdd } from 'react-icons/md'
import { ToolContext } from './contexts'
import { LoadTool } from './load-tool'

type Props = {
  listTools: ListTools
  addTool: AddTool
  updateStatusTool: UpdateStatusTool
  deleteTool: DeleteTool
  reserveTool: ReserveTool
  loadTool: LoadToolById
}

export const Tool: React.FC<Props> = ({ listTools, addTool, updateStatusTool, deleteTool, reserveTool, loadTool }: Props): JSX.Element => {
  const [tools, setTools] = useState<ToolModel[]>([])
  const [tool, setTool] = useState<ToolModel>()
  const [showAddTool, setShowAddTool] = useState<boolean>(false)
  const [showLoadTool, setShowLoadTool] = useState<boolean>(false)
  const [showUpdateStatus, setShowUpdateStatus] = useState({ id: 0, show: false })
  const [showReserverTool, setShowReserverTool] = useState({ id: 0, show: false })
  const [reload, setReload] = useState(false)

  useEffect(() => {
    listTools().then(tools => setTools(tools)).catch(error => console.log(error))
  }, [reload])

  const handleDeleteTool = async (id: number): Promise<void> => {
    const result = confirm('Deseja mesmo apagar essa ferramenta ?')
    if (!result) return undefined
    try {
      await deleteTool({ id })
      setTools(tools?.filter(tool => tool.id !== id))
    } catch (error) {}
  }

  const handleLoadTool = async (id: number): Promise<void> => {
    try {
      const result = await loadTool({ id })
      setTool(result)
    } catch (error) {}
  }

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
      updateStatusTool,
      handleDeleteTool,
      showReserverTool,
      setShowReserverTool,
      reserveTool,
      handleLoadTool,
      showLoadTool,
      setShowLoadTool
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
      {tool ? <LoadTool tool={tool}/> : ''}
    </ToolContext.Provider>
  </>
  )
}
