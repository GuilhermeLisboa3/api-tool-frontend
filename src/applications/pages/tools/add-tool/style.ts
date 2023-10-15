'use client'
import styled from 'styled-components'
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 40px auto 0 ;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px
  }

  button {
    margin: 10px auto 20px;
  }

  @media (max-width: 510px) {
    width: 95%;
  }
`
