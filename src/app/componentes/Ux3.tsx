import React from 'react'


const UX3 = () => {

const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');   
    


return (
 <form>          
            <label htmlFor='email'>Correo electrónico:</label>              
            <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>          
          <button type='submit' className='btn'>Recuperar Contraseña</button>   
        </form> 
   
)
}

export default UX3
