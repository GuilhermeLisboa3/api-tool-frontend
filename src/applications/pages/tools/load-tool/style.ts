'use client'
import styled from 'styled-components'

export const Container = styled.div`
margin: 20px;
  p {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 2px;
    span {
      font-weight: 400;
      margin-left: 10px;
    }
  }

  @media (max-width: 339px) {
    p {
    font-size: 1rem;
    span {
      font-size: 0.9rem;
      margin-left: 10px;
    }
  }
  }
`
