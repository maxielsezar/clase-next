"use client"; 

import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="select">
        <div className="selected" data-default="All" data-one="Crear oferta de trabajo" data-two="Acceder a bolsa de CVs" data-three="Recomendaciones Laborales">
          Soy empresario
          <svg xmlns="www.w3.org" height="1em" viewBox="0 0 512 512" className="arrow">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
        <div className="options">
          
          <div>
            <input id="option-1" name="option" type="radio" />
            <label className="option" htmlFor="option-1">
              Crear oferta de trabajo
            </label>
          </div>
          <div>
            <input id="option-2" name="option" type="radio" />
            <label className="option" htmlFor="option-2">
              Acceder a bolsa de CVs
            </label>
          </div>
          <div>
            <input id="option-3" name="option" type="radio" />
            <label className="option" htmlFor="option-3">
              Recomendaciones Laborales
            </label>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .select {
    width: fit-content;
    cursor: pointer;
    position: relative;
    z-index: 1000; /* CLAVE: Un z-index alto para estar por encima de todo el nav */
    transition: 300ms;
    color: white; /* Asegura que el texto sea blanco */
  }

  .selected {
    background-color: #2a2f3b; /* CLAVE: Color de fondo oscuro para que sea visible */
    padding: 5px;
    margin-bottom: 3px;
    border-radius: 5px;
    position: relative;
    z-index: 1; 
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .arrow {
    position: relative;
    right: 0px;
    height: 10px;
    transform: rotate(-90deg);
    width: 25px;
    fill: white;
    z-index: 1;
    transition: 300ms;
  }

  .options {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 5px;
    background-color: #2a2f3b; /* CLAVE: Fondo oscuro para los items desplegados */
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms ease;
  }

  .select:hover > .options {
    opacity: 1;
    pointer-events: auto;
  }

  .select:hover > .selected .arrow {
    transform: rotate(0deg);
  }

  .option {
    border-radius: 5px;
    padding: 5px;
    transition: 300ms;
    background-color: #2a2f3b;
    width: 150px;
    font-size: 15px;
    color: white; /* Asegura que el texto sea blanco */
  }
  .option:hover {
    background-color: #323741;
  }

  .options input[type="radio"] {
    display: none;
  }

  .options label {
    display: inline-block;
  }
  /* Se eliminaron las reglas de ::before y content: attr(...) */
`;

export default Radio;