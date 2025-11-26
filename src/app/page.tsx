"use client"
import React from 'react'
import Boton from '@/app/componentes/Boton';
import Boton2 from '@/app/componentes/boton2'
import BatciBoton from '@/app/componentes/BatciBoton'
import { BsBriefcaseFill } from "react-icons/bs";
import { BsMegaphoneFill } from "react-icons/bs";
import styled from 'styled-components';
import Formulario from '@/app/componentes/Formulario'

const page = () => {

     const items = [
    {
      id: "1",
      img: "https://reviewsapp.org/uploads/visual-studio-code-a-powerful-tool-for-all-developers.png",
      url: "https://example.com/one",
      height: 650,
      text: "PAginas web"
    },
     {
      id: "5",
      img: "https://th.bing.com/th/id/R.bf44612847484289c9133fdff15b36f9?rik=%2fIU%2bkWL4dAVquQ&pid=ImgRaw&r=0",
      url: "https://example.com/one",
      height: 500,
      text: "electricista"
    },
     {
      id: "4",
      img: "https://s3-media2.fl.yelpcdn.com/bphoto/vUpRpOCwJj7v80Uv_eZdWg/o.jpg",
      url: "https://example.com/one",
      height: 250,
      text: "Sanitario"
    },
     {
      id: "6",
      img: "https://tse2.mm.bing.net/th/id/OIP.PMHBsaxIPE4aolDu4WyliQHaFT?cb=12&w=600&h=430&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 600,
      text: "Guia de turism0"
    },
    {
      id: "2",
      img: "https://tse2.mm.bing.net/th/id/OIP.i63pfw9_x3_GuYC9Ye65zwHaFR?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/two",
      height: 250,
      text: "reparacion de equipos informaticos"
    },
    {
      id: "3",
      img: "https://www.metalindustrias.com.pe/wp-content/uploads/2022/02/noticia5.png",
      url: "https://example.com/three",
      height: 600,
      text: "soldadura"
    },
    {
      id: "8",
      img: "https://th.bing.com/th/id/OIP.VPVCMqHNeHZEeLYxxDk56QHaE8?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 450,
      text: "Herreria"
    },
    {
      id: "7",
      img: "https://th.bing.com/th/id/OIP.E5gG5kKvN0yU1rhnCme3BwHaE8?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 250,
      text: "Cocina"
    },
    {
      id: "9",
      img: "https://tse3.mm.bing.net/th/id/OIP.uEVDOxteKrfDzOEFvtj5awHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 350,
      text: "Carpinteria"
    },
    {
      id: "10",
      img: "https://th.bing.com/th/id/OIP.98wfOwTZQ5iKPiuY--PRpAHaE9?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "",
      height: 200,
      text: "reposteria"
    },
    {
      id: "11",
      img: "https://tse2.mm.bing.net/th/id/OIP.5WYGLCWIKX-po472aL9wPAAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 350,
      text: "reposteria"
    },
    {
      id: "12",
      img: "https://tse1.mm.bing.net/th/id/OIP.AyWAJ_u395sN8lclg-kwUgHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 250,
      text: "reposteria"
    },
    {
      id: "13",
      img: "https://th.bing.com/th/id/OIP.GEEcs7sTP5vbOzKxKXWiqAHaE8?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 450,
      text: "reposteria"
    },
    {
      id: "14",
      img: "https://cdn.euroinnova.edu.es/img/subidasEditor/herreria-1598279096.jpg",
      url: "https://example.com/one",
      height: 350,
      text: "reposteria"
    },
    {
      id: "15",
      img: "https://th.bing.com/th/id/OIP.YogMvsYk7mbmGQrMHuowEQHaE8?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 600,
      text: "reposteria"
    },
    {
      id: "17",
      img: "https://tse1.mm.bing.net/th/id/OIP.ZQpYrA7BHzPRGVOnwTj5AQHaE8?cb=12&w=1500&h=1001&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 550,
      text: "reposteria"
    },
    {
      id: "16",
      img: "https://tse3.mm.bing.net/th/id/OIP.Rk3O1rWrKLL9PcESUoBHuwHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://example.com/one",
      height: 300,
      text: "reposteria"
    },
    // ... more items
];
  return (
    <>
    <div className='w-full bg-gray-900 h-115'>
         <div className='flex justify-end'>
           <img src="/CFP-Nº-655-Blanco.png" alt="" height={100} width={100} />     
        </div>
        <h1 className="lg:text-8xl text-center text-blue-500 text-4xl">
          CENTRO DE FORMACION PROFESIONAL Nº665
        </h1>
    </div>
    <br />
<div className=" text-black bg-white text-center items-center flex justify-center ">
    <div className="">
    </div>
    <div className="pt-0">
        <h1 className='text-center text-6xl overline'>
            Súmate a nuestra comunidad
        </h1>
        <br />
        <h2 className='text-center text-4xl'>
            Somos una plataforma diseñada para unir empresarios de Esquel y Trevelin con talento calificado, formado en el CFP N° 655. En simples pasos y 100% GRATIS.
        </h2>
        <br />
         <div className=''>
          <Boton />
          <br />
          <Boton />
    </div>
    <br />
   <div className='flex justify-center'>
     <div>
        <div className='bg-blue-300 border-2 border-black-600  rounded-xl h-60 w-260 text-4xl items-center text-center'>
        <div className='m-10'>
          <BsBriefcaseFill />
        <h1 className='text-5xl'>
          Contratá personal
        </h1>
        <p>
          ¿Necesitas personal capacitado para que trabaje en tu 
            negocio/empresa? ¡Publicá tus ofertas en un aquí!
        </p>
        </div>
    </div>
    <br />
    <div className='bg-blue-300 border-2 border-black-600  rounded-xl h-60 w-260 text-4xl text-center items-center'>
        <div className='m-10 '>
          <BsMegaphoneFill />
        <h1 className='text-5xl'>
          Difundí a la comunidad
        </h1>
        <p>
          ¿Estás vendiendo tu fondo de comercio? ¿Queres vender 
         mobiliario de tu negocio? ¡hacéselo saber a tus colegas!
        </p>
        </div>
    </div> 
     </div>
   </div>
    <br />
    <BatciBoton />
    <br />
    <h2 className='text-4xl'>
      ¿COMO POSTULARME?
    </h2>
    <br />
    <div className='flex justify-center'>
         <Formulario />
    </div>
    
    </div>

</div>
    
</>

  )

}

export default page

