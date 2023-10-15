'use client'
import { colors } from '@/applications/styles'
import styled from 'styled-components'

export const Container = styled.section`
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  border-radius: 5px;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .available {
    color: ${colors.green}
  }

  .reserved {
    color: ${colors.yellow}
  }

  .inUse {
    color: ${colors.red}
  }

  div {
    margin: 0;
    box-shadow: none;
    border: none;
    padding: 10px;
    p {
      margin-bottom: 0;
    }
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.1rem;
      color: ${colors.black};
      font-weight: 400;
    }

    p:nth-child(1) {
      color: ${colors.black};
      font-size: 1.8rem;
      font-weight: bolder;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    svg {
      font-size: 2rem;
      color: ${colors.black}; 
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 692px) {
    div:nth-child(1) {
      p:nth-child(1) {
        font-size: 1.4rem;
      }
      p:nth-child(2), p:nth-child(3) {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 523px) {
    flex-direction: column;
    height: auto;
  }
`
