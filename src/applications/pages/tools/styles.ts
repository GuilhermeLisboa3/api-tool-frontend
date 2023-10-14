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

export const CardTool = styled.section`
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

  @media (max-width: 502px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
    div {
      padding: 0;
    }
    div:nth-child(1) {
      width: 100%;
      align-items: flex-start;
    }
  }

  @media (max-width: 422px) {
    div:nth-child(1) {
      p {
        font-size: 0.9rem;
        font-weight: 500;
      }

      p:nth-child(1) {
        font-size: 1.6rem;
      }
    }
    div:nth-child(2) {
      svg {
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 353px) {
    text-align: center;
    align-items: center;
    gap: 10px;
    div:nth-child(1) {
      align-items: center;
    }
  }
`
