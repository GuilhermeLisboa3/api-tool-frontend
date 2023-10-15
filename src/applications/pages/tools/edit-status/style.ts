'use client'
import styled from 'styled-components'
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto auto;

  label {
    margin-top: 30px;
    margin-bottom: 0px;
    cursor: pointer;
  }

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
