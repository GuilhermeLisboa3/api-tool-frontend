import { Container } from './style'

import React from 'react'

type Props = {
  children: string | JSX.Element
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

export const Button: React.FC<Props> = ({ children, disabled, type, onClick, className }): JSX.Element => {
  return (
    <>
      <Container className={className} disabled={disabled} type={type} onClick={onClick}>
        {children}
      </Container>
    </>
  )
}
