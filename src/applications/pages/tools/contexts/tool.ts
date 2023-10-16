import { createContext } from 'react'
import { type Tool } from '@/domain/models'
import { type UpdateStatusTool, type AddTool } from '@/domain/use-cases/tools'

type Props = {
  listTools: Tool[]
  showAddTool: boolean
  setShowAddTool: React.Dispatch<React.SetStateAction<boolean>>
  addTool: AddTool
  reload: boolean
  setReload: React.Dispatch<React.SetStateAction<boolean>>
  showUpdateStatus: { id: number, show: boolean }
  setShowUpdateStatus: React.Dispatch<React.SetStateAction<{ id: number, show: boolean }>>
  updateStatusTool: UpdateStatusTool
  handleDeleteTool: (id: number) => Promise<void>
}

export const ToolContext = createContext<Props>(null as any)
