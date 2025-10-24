"use client"
import React from 'react'
import Header from '@/app/componentes/Header'
import Main from '@/app/componentes/Main'
import ListadoEmpleos from '@/app/componentes/ListadoEmpleos'
import { useState } from 'react'


const page = () => {
  const [filtro,setFiltro]=useState('')
  return (
    <div>
      <Header/>
      <p className="text-black text-5xl text-center mt-10 mb-20"> Bolsa de empleo </p>
      <Main />
      <ListadoEmpleos />
    </div>

  )
}

export default page
