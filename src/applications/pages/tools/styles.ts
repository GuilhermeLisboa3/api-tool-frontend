'use client'
import { colors } from '@/applications/styles'
import styled from 'styled-components'
import { Container as Cont } from 'reactstrap'

export const Container = styled(Cont)`
  min-height: 100vh;
  h1 {
    margin: 20px 0;
    text-align: center;
  }
`

export const Tools = styled.main`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;

  button.addButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    gap: 3px;
    svg {
      font-size: 1.1rem;
      color: ${colors.white}
    }
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`
