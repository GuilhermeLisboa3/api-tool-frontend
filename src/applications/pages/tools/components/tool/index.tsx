import React, { useContext } from 'react'
import { Container } from './style'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Button } from '@/applications/components'
import { type Tool } from '@/domain/models'
import { formatDate } from '@/applications/utils'
import { ToolContext } from '../../contexts'

type Props = { tool: Tool }

export const CardTool: React.FC<Props> = ({ tool }: Props): JSX.Element => {
  const { setShowUpdateStatus, handleDeleteTool, setShowReserverTool } = useContext(ToolContext)
  const statusNameInPortuguese = (name: string): string | undefined => {
    if (name === 'available') return 'Disponível'
    if (name === 'reserved') return 'Reservado'
    if (name === 'inUse') return 'Em uso'
  }

  return (
    <>
      <Container>
        <div>
          <p>{tool.name} - <span className={tool.status}>{ statusNameInPortuguese(tool.status)}</span></p>
          <p><span>Data da coleta:</span> { tool.dateOfCollection !== null ? formatDate(tool.dateOfCollection) : 'disponível'}</p>
          <p><span>Data da devolução:</span> { tool.dateOfDevolution !== null ? formatDate(tool.dateOfDevolution) : 'disponível'}</p>
        </div>
        <div>
          { tool.status !== 'available' ? '' : <Button onClick={() => setShowReserverTool({ id: tool.id, show: true })}>Reservar</Button> }
            <TiEdit onClick={() => setShowUpdateStatus({ id: tool.id, show: true })}/>
            <RiDeleteBinLine onClick={async () => { await handleDeleteTool(tool.id) }}/>
        </div>
      </Container>
    </>
  )
}
