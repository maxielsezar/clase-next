"use client"
import styled from 'styled-components';
import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({ title: "", description: "", name: "", type:"", location: "", company: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://bolsa-de-empleo-cfp.vercel.app/api/jobs", formData);
      setResponse(res.data);
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
    }
  };
  return (

    <StyledWrapper>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          
        <div className='w-15 h-15 flex justify-end'>
            <img src="/cfp655.png" alt="" />
        </div>
          <span className="title flex justify-center">Cursos Del CFP N°655</span>
          <br />
          <span className="subtitle flex justify-center">Registrate acá</span>
          <div className="form-container">
            <input
            title="text"
            
            name="title"
    
            value={formData.title}
            onChange={handleChange}
          />
            <input type="text" className="input" placeholder="Nombre" />
            <input type="text" className="input" placeholder="Curso" />
            <input type="text" className="input" placeholder="Horario" />
            <input type="textArea" className="input" placeholder="Descripcion" />
          
            <input type="text" className="input" placeholder="Ubicacion" />
          </div>
        
        </form>
        <div className="form-section">
        </div>
      </div>
    </StyledWrapper>
    
  );
}
//


const StyledWrapper = styled.div`
  .form-box {
    max-width: 800px;
    max-height: 1000px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
  }

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }

  /*Form text*/
  .title {
    font-weight: bold;
    font-height: bold;
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
  }

  /*Inputs box*/
  .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 .5rem;
    width: 100%;
  }

  .input {
    background: none;
    border: 0;
    outline: 0;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: .9rem;
    padding: 8px 15px;
  }

  .form-section {
    padding: 16px;
    font-size: .85rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  }

  .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color .3s ease;
  }

  .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }

  /*Button*/
  .form button {
    background-color: #0939939;
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color .3s ease;
  }

  .form button:hover {
    background-color: #005ce6;
  }`;

export default Form;

