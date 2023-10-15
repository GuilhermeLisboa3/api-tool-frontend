'use client'
import { colors } from './colors'

import { createGlobalStyle, keyframes } from 'styled-components'

export const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: var(--font-roboto);
  }

  *:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    background-color: ${colors.primary}
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.red};
  }

  input[type="password"], input[type="email"], input[type="text"], input[type="date"], input[type="time"] {
    border: none;
    outline: none;
  }


  button {
    cursor: pointer;
    border: none;

    :focus {
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
  }

  [disabled] {
    opacity: 0.9;
    cursor: not-allowed;
  }

  .react-modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.react-modal {
  width: 500px;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  background-color: #fff;
}

.button-icon-close {
  position: absolute;
  background-color: transparent;
  top: 5px;
  left: 5px;
}

.button-icon-close svg {
  font-size: 1.4rem;
}

.form-error {
  color: ${colors.red};
  font-size: 0.8rem;
}

@media (max-width: 510px) {
  .react-modal {
    width: 95%;
  }
}

`
