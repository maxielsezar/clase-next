import React from 'react'
import Masonry from '../componentes/Masonry';
import Boton from '../componentes/Boton'



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
      img: "https://www.bing.com/images/search?view=detailV2&ccid=gAbYw2th&id=17A9E939AB8610F303603B6920A2135DA834BD88&thid=OIP.gAbYw2th6pmFXzaFBXGaPwHaDg&mediaurl=https%3a%2f%2faceroscrea.com%2fwp-content%2fuploads%2f2023%2f02%2fforjado-de-solera-al-rojo-vivo-con-martillo.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8006d8c36b61ea99855f368505719a3f%3frik%3diL00qF0ToiBpOw%26pid%3dImgRaw%26r%3d0&exph=350&expw=740&q=herreria&FORM=IRPRST&ck=258CBB9379AE0AE237F04FB326990C90&selectedIndex=22&itb=0",
      url: "https://example.com/one",
      height: 450,
      text: "Herreria"
    },
    {
      id: "7",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=S6c99C%2f2&id=A94CAD7725DEFB4A3070ABE387B838277F8E690F&thid=OIP.S6c99C_2YOXJLNqtdm15SwHaE8&mediaurl=https%3a%2f%2fwww.65ymas.com%2fuploads%2fs1%2f16%2f41%2f12%2ffood-and-fun.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4ba73df42ff660e5c92cdaad766d794b%3frik%3dD2mOfyc4uIfjqw%26pid%3dImgRaw%26r%3d0&exph=1001&expw=1500&q=clases+de+cocina+&FORM=IRPRST&ck=F32DC7C97E2021AACB480BD52C3CA551&selectedIndex=2&itb=0",
      url: "https://example.com/one",
      height: 250,
      text: "Cocina"
    },
    {
      id: "9",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=M8b6MeD4&id=01BF5566825E035840EBA57BD08CA6C38583285A&thid=OIP.M8b6MeD41vEjvknudTIiigHaE3&mediaurl=https%3a%2f%2fbdnplus.com%2fwp-content%2fuploads%2f2015%2f06%2fCarpinteria.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.33c6fa31e0f8d6f123be49ee7532228a%3frik%3dWiiDhcOmjNB7pQ%26pid%3dImgRaw%26r%3d0&exph=800&expw=1216&q=carpinteria&FORM=IRPRST&ck=141E48C7D0FFB628F1FAFC627D4A1891&selectedIndex=17&itb=0",
      url: "https://example.com/one",
      height: 350,
      text: "Carpinteria"
    },
    {
      id: "9",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=pXl%2fTfwp&id=BB9EDA497352274A31583CCC3089A06FE6BC604A&thid=OIP.pXl_Tfwpygjf4pZntCYB2QHaE8&mediaurl=https%3a%2f%2fwww.pedroreyes.es%2fwp-content%2fuploads%2f2022%2f01%2fshutterstock_1892395513FILEminimizer.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a5797f4dfc29ca08dfe29667b42601d9%3frik%3dSmC85m%252bgiTDMPA%26pid%3dImgRaw%26r%3d0&exph=667&expw=1000&q=reposteria&FORM=IRPRST&ck=661BE2500817D9DC6947EAEBD0CEA33E&selectedIndex=15&itb=0",
      url: "https://example.com/one",
      height: 350,
      text: "reposteria"
    },
    // ... more items
];
  return (
    <>

<div className="grid grid-cols-5 grid-rows-2 gap-4">
    <div className="col-span-5">
        <main className='h-max'>
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
        </main>
    </div>
    <div className="col-span-5 row-start-2">
        <h1 className='text-center'>
            Súmate a nuestra comunidad
        </h1>
        <h2 className='text-center'>
            Somos una plataforma diseñada para unir empresarios de Esquel y Trevelin con talento calificado, formado en el CFP N° 655. En simples pasos y 100% GRATIS.
        </h2>

          
    </div>
</div>
    
</>

  )
}

export default page
