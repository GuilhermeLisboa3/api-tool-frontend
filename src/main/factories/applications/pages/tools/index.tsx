'use client'
import { Tool } from '@/applications/pages'
import { makeListTools } from '@/main/factories/domain/use-cases/tool'

export const MakeTool: React.FC = () => (
    <Tool listTools={makeListTools()}/>
)
