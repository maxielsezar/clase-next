"use client"
import React from 'react'
import Header from '@/app/componentes/Header'
import Main from '@/app/componentes/Main'
import ListadoEmpleos from '@/app/componentes/ListadoEmpleos'

import { useState, useEffect } from 'react' 


const page = () => {
  const [filtro,setFiltro]=useState('')
  
  const [data,setData]=useState('')

  useEffect (()=> {
    const fetchData = async ()=>{
      try{
        const response = await fetch ("http://localhost:4000/");

        const jsonData =await response.json ();
        setData (jsonData);
      } catch (error) {
        console.error ("Error fetching data:", error);
      }
    };
    fetchData ();
  }, []);
//mongodb+srv://naticayul_db_user:GqHsLJpHq6fa6Btl@cluster0.lnaccnw.mongodb.net/?appName=Cluster0
  return (
    <div>
      <Header/>
      <p className="text-black text-5xl text-center mt-10 mb-20"> Bolsa de empleo </p>
      <Main />
      <h1>{data}</h1>
      <ListadoEmpleos />
    </div>

  )
}

export default page
