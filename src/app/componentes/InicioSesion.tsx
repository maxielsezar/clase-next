'use client'
import { useState, useEffect } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa"; 
import axios from 'axios';


const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  
      const [data,setData]= useState('')
  
      useEffect(() => { 
      async function getUser() {
        try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
        } catch (error) {
        console.error(error);
  };
      getUser(); }
      }, []); 



  const handleGoogleSignIn = () => {
    console.log('Iniciando sesión con Google');
  }
  const [verPassword, setVerPassword] = useState(false); 

    const handleSubmit = (e: React.FormEvent) => {
        console.log('Iniciando sesión'); }

return ( 
  <>

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

export default InicioSesion;