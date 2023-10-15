import { createContext } from 'react'
import { type Tool } from '@/domain/models'
import { type AddTool } from '@/domain/use-cases/tools'

type Props = {
  listTools: Tool[]
  showAddTool: boolean
  setShowAddTool: React.Dispatch<React.SetStateAction<boolean>>
  addTool: AddTool
  setReload: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToolContext = createContext<Props>(null as any)
