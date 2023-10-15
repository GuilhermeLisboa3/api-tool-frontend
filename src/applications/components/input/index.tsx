import { useFormContext } from 'react-hook-form'
import { Container } from './style'

import React from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string
}

export const Input: React.FC<Props> = ({ name, placeholder, type, ...props }): JSX.Element => {
  const { register } = useFormContext()
  return (
  <>
    <Container>
      <input
      {...props}
      placeholder=" "
      id={name}
      autoComplete="off"
      type={type}
      {...register(name)}
      />
      <label htmlFor={name}>{ placeholder }</label>
    </Container>
  </>
  )
}
