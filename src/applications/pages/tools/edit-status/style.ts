'use client'
import styled from 'styled-components'
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto auto;

  select {
    margin-bottom: 0;
    &:focus {
      border-color: inherit;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  button {
    margin: 10px auto 20px;
  }

  @media (max-width: 510px) {
    width: 95%;
  }
`
