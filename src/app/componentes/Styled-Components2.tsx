import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="input-group">
        <input required type="text" name="text" autoComplete="off" className="input" />
        <label className="user-label">Nombre</label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input-group {
   position: relative;
  }

  .input {
   border: solid 1.5px #020024;
   border-radius: 1rem;
   background: none;
   padding: 1rem;
   font-size: 1rem;
   color: #020024;
   transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .user-label {
   position: absolute;
   left: 15px;
   color: #9E9E9E;
   pointer-events: none;
   transform: translateY(1rem);
   transition: 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .input:focus, input:valid {
   outline: none;
   border: 1.5px solid #1a73e8;
  }

  .input:focus ~ label, input:valid ~ label {
   transform: translateY(-50%) scale(0.8);
   background-color: #212121;
   padding: 0 .2em;
   color: #2196f3;
  }`;

export default Input;
