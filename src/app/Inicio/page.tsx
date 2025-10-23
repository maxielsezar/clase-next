'use client'
import React ,{ useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

import './contenido.css'

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const handleGoogleSignIn = () => {
    console.log('Iniciando sesión con Google');
  }
  const [verPassword, setVerPassword] = useState(false); 

    const handleSubmit = (e: React.FormEvent) => {
        console.log('Iniciando sesión'); }

return ( 
  <>
    <div className='titulo'>
      <img className='logo' src="https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2016/04/CFP-N%C2%BA-655-Blanco.png" />
    </div>
    <div className='contenido'>
      <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Correo electrónico:</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <label htmlFor='password'>Contraseña:</label>
        <div>
          <input className="w-130" type={verPassword ? 'password' : 'text'} value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={() => setVerPassword(!verPassword)}>
            {verPassword ? <IoEyeSharp /> : <FaEyeSlash />}
          </button>
        </div>
        <button type="submit">Iniciar Sesión</button>
        <button className='google' onClick={handleGoogleSignIn}>Iniciar sesión con Google</button>  
        </form>
        <div className="olvido"><a href="/reset">¿Olvidaste tu contraseña?</a></div>
        <p className="texto">¿No tenés cuenta? <a href="/register">Regístrate</a></p>
    </div>  
  </>   
    );     
};
export default page;