import React from 'react'
import Link from 'next/link'

const Nav2 = () => {
    const lista = [
        {
            link:"/cargar-cv",
            texto:"Cargar Curriculum Vitae"
        },
        {
            link:"/terminos",
            texto:"ir a contacto"
        },
        {
            link:"/direccion/edificio",
            texto:"ir a edificio"
        },
           {
            link:"/direccion",
            texto:"ir a direccion"
        },
           {
            link:"/recursos",
            texto:"ir a recursos"
        },
    ]

  return (
    <nav>
        {lista.map((item,index)=>
        <Link key={index} 
        className="p-1 ml-5 mt-3 rounded-3xl bg-green-600" 
        href={item.link}>
        {item.texto}
        </Link>)}
    </nav>
  )
}


export default Nav2
