'use client'
import React ,{ useState, useEffect } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa"; 
import Link from 'next/link';
import axios from 'axios';
import './contenido.css';
import reset from '../Inicio/reset/page';

const page = () => {
  
return ( 
  <>
    <div>
      <img className='logo1' src="/CFP-Nº-655-Blanco.png" />
      <h1>CENTRO DE FORMACIÓN Nº655</h1>
    </div>
    
  </>   
    );     
};
export default page;