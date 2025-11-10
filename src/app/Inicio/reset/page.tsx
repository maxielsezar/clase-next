"use client";
import React from 'react';

const page = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');   
    
  return (  
    <div className='contenido'>
    <img className='logo1' src="/CFP-Nº-655-Blanco.png" />
      <h2>¿Olvidaste tu contraseña?</h2>
      <p>Introduce tu número de Celular o tu dirección de correo electrónico de recuperación</p>   
        <form>          
            <label htmlFor='email'>Correo electrónico:</label>              
            <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>          
          <button type='submit' className='btn'>Recuperar Contraseña</button>   
        </form>    
    </div>  
  );
}
export default page;