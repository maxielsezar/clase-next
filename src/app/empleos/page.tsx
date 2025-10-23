"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Masonry from '@/app/componentes/Masorny';

const page = () => {

const items = [
    {
      id: "1",
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2023/05/CFP655-MantenimientoyReparacion2023-02-300x224.jpg",
      url: "https://example.com/one",
      height: 500,
    },
    {
      id: "2",
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2022/12/CFP655-CarpinteriaCIERRE-10-300x168.jpg",
      url: "https://example.com/two",
      height: 400,
    },
    {
      id: "3",
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2022/12/CFP655-PanaderoCIERRE-06-225x300.jpg",
      url: "https://example.com/three",
      height: 650,
    },
    {
      id: "4",
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-03-at-11.gif",
      url: "https://example.com/four",
      height: 350,
    },
    {
      id: "5",
      img: "https://media.istockphoto.com/id/1198049220/es/foto/qui%C3%A9n-orden%C3%B3-este-main.jpg?s=612x612&w=0&k=20&c=Ai5QuP8Hf5rRSv9eJ0anUnB0Sf9pZHW51pODeAwdw5c=",
      url: "https://example.com/five",
      height: 600,
    },
    {
      id: "6",
      img: "https://cdn.euroinnova.edu.es/img/subidasEditor/worker-gdd7581a01_640-1651038797.webp",
      ulr: "https://example.com/six",
      height: 600,
    },
     {
      id: "7",
      img: "https://www.trendtic.cl/wp-content/uploads/2019/04/persona-y-computador-en-el-trabajo.jpg",
      ulr: "https://example.com/seven",
      height: 560,
    },
 {
      id: "8",
      img: "https://uegp202generalsanmartin.edu.ar/wp-content/uploads/2020/07/electricidad_del_automotor.jpg",
      ulr: "https://example.com/eight",
      height: 560,
    },
     {
      id: "9",
      img: "https://faustotivelli.com/wp-content/uploads/2024/12/Fausto-Tivelli.jpg",
      ulr: "https://example.com/nine",
      height: 600,
    },
    {
      id: "10",
      img: "https://www.shutterstock.com/image-photo/young-multiethnic-customer-advising-retail-600nw-2434354957.jpg",
      ulr: "https://example.com/ten",
      height: 650,
    },
    {
      id: "11",
      img: "https://tecnicadelaindia.edu.ar/wp-content/uploads/2018/02/computing.jpeg",
      ulr: "https://example.com/eleven",
      height: 560,
    },
     {
      id: "13",
      img: "https://www.shutterstock.com/image-photo/professinal-chef-cook-man-pouring-600nw-2515172693.jpg",
      ulr: "https://example.com/thirteen",
      height: 450,
    },
    
    
    
];


  return (
    

<>
<Masonry
  items={items}
  ease="power3.out"
  duration={0.6}
  stagger={0.05}
  animateFrom="bottom"
  scaleOnHover={true}
  hoverScale={0.95}
  blurToFocus={true}
  colorShiftOnHover={false}
/>
<div className='pt-10'>
  <p className='ml-50 mt-10 text-4xl'><b>TE AYUDAMOS A FORJARTE PARA EL TRABAJO EN EL :</b></p>
    <div className='ml-5 h-50 bg-center m-5 bg-no-repeat bg-[url(https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2016/04/CFP-N%C2%BA-655-Blanco.png)]'></div>

</div>




        

</>
      
  )
  
}


export default page
