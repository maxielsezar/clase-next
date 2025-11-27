import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>  Regístrate como empresario, contratá y difundí.
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    --green: #00000;
    font-size: 35px;
    padding: 0.7em 2.7em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid var(--green);
   background: #2A7B9B;
background: linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 165, 199, 0.92) 50%, rgba(138, 233, 255, 1) 100%);color: var(--green);
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
  }

  button:hover {
    color: #474747;
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
  }

  button:before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform .4s ease-in-out;
    background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
  }

  button:hover:before {
    transform: translateX(15em);
  }`;

export default Button;