'use client'
import styled from 'styled-components'
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px auto 0 ;

  label {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px
  }

  input {
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
