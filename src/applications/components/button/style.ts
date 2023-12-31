'use client'
import { colors } from '@/applications/styles'
import styled from 'styled-components'

export const Container = styled.button`
  display: block;
  background-color: ${colors.red};
  color: ${colors.white};
  border-radius: 0.5rem;
  padding: 0 1rem;
  width: 95px;
  align-self: center;
  font-weight: 500;
  font-size: 1rem;
  height: 3rem;
  margin-right: 10px;

  &:hover {
    opacity: 0.9;
  }
`
