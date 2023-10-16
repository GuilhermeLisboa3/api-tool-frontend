'use client'
import { Container } from './style'
import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React, { useContext } from 'react'
import { ToolContext } from '../contexts'
import { type Tool } from '@/domain/models'
import { formatDate } from '../../../utils'

type Prop = { tool: Tool }

export const LoadTool: React.FC<Prop> = ({ tool }): JSX.Element => {
  const { setShowLoadTool, showLoadTool } = useContext(ToolContext)
  const statusNameInPortuguese = (name: string): string | undefined => {
    if (name === 'available') return 'Disponível'
    if (name === 'reserved') return 'Reservado'
    if (name === 'inUse') return 'Em uso'
  }
  return (
    <Modal ariaHideApp={false} isOpen={showLoadTool} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close' onClick={() => setShowLoadTool(false)}><AiOutlineClose/></button>
      <Container>
        <p>Nome:<span>{tool.name}</span></p>
        <p>Descrição:<span>{tool.description}</span></p>
        <p>Status:<span>{statusNameInPortuguese(tool.status)}</span></p>
        <p>Data da coleta:<span>{ tool.dateOfCollection !== null ? formatDate(tool.dateOfCollection) : 'disponível'}</span></p>
        <p>Data da devolução:<span>{ tool.dateOfDevolution !== null ? formatDate(tool.dateOfDevolution) : 'disponível'}</span></p>
        <p>Mecânico:<span>{ tool.mechanicName !== null ? tool.mechanicName : 'disponível'}</span></p>
      </Container>
    </Modal>
  )
}
