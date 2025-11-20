"uae client"
import React from 'react'
import Image from 'next/image'
import CvBoron from '@/app/componentes/CvBoron' 
import SumarBoton from '@/app/componentes/SumarBoton'
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";


const page = () => {
  return (
    <div className='bg-white flex justify-center'>
      <div className='text-ceentr w-180 h-190 border-4 "h-14 bg-linear-to-t from-sky-500 to-indigo-500 border-black p-10'>
       <Image src="/CFP-Nº-655-Blanco.png" alt="" height={70} width={70} />
     
        <h1 className='text-center text-3xl  underline'>
            Formulario 
        </h1>
        <br />
        <h2 className='text-center overline'>
            Formacion y experiencia
        </h2>
        <div>
          <br />
          <form className="form">
        <p className=" underline-offset-8">Registarse</p>
        <p className="message">Regístrate ahora y obtén acceso completo a nuestra aplicación. </p>
        <br />
        <div className="flex">
          <label>
             <span>Nombre y Apellido:  </span>
            <input className="input" type="text" placeholder="Nombre Completo" required />
          </label>
          <br />
        </div>  
        <label>
          <span>Correo Electronico:  </span>
          <input className="input" type="email" placeholder="Gmail" required />
          
        </label> 
        <label>
          <br />
          <span>◉ Numero de Telefono:  </span>
          <input className="input" type="telephone" placeholder="Telefono" required />
        </label>
        <label>
          <br />
          <span>Nacionalidad:  </span>
          <input className="input" type="text" placeholder="Nacionalidad" required />
          
        </label>
        <br />
       </form>
<br />
        </div>
        <div className='flex justify-center border-3'>
          <div className='bg-gray-800 w-80 h-60 border-indigo-500'>
            <h1 className='text-center "h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"'>
              <IoSchool />
              Estudios
            </h1>
             <label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label>
          <label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label><label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label><label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label><label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label><label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label>
          <div className='flex justify-center'>
            <SumarBoton />
          </div>
          </div>
          <div className='bg-gray-800 border-3 w-80 h-60 h-14 bg-linear-to-t from-gray-800 to-gray-650'>
            <h1 className='text-center "h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"'>
              <MdWork />
              Experiencia
            </h1>
           
             <label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label>
           <label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label>
           <label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label>
          <label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label>
          <label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label>
          <label>
            <input className="input" type="text" placeholder="agragar infromacion" required />
            
          </label>
          <div className='flex justify-center'>
            <SumarBoton />
          </div>
          </div>
        </div>
        <br />
        <div className='flex justify-end'>
          <CvBoron />
        </div>
      </div>
    </div>
  )
}

export default page
