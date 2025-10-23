import React from 'react'
import Header from '@/app/componentes/Header'
import Main from '@/app/componentes/Main'
import ListadoEmpleos from '@/app/componentes/ListadoEmpleos'



const page = () => {
  return (
    <div>
      <Header/>
      <p className="text-black text-5xl text-center mt-10 mb-20"> Bolsa de empleo </p>
      <Main/>
      <ListadoEmpleos/>
    </div>

  )
}

export default page
