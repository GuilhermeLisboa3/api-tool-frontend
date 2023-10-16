'use client'
import { Tool } from '@/applications/pages'
import { makeAddTool, makeDeleteTool, makeListTools, makeUpdateStatusTool } from '@/main/factories/domain/use-cases/tool'

export const MakeTool: React.FC = () => (
  <Tool
    listTools={makeListTools()}
    addTool={makeAddTool()}
    updateStatusTool={makeUpdateStatusTool()}
    deleteTool={makeDeleteTool()}
  />
)
