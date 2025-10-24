"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Masonry from '@/app/componentes/Masorny'


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
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2022/12/CFP655-MonitorCIERRE-19-300x225.jpg",
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
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2024/10/CFP-MANTENIMIENTOEDIFICIOSA_11-1.gif",
      ulr: "https://example.com/nine",
      height: 600,
    },
    {
      id: "10",
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2023/05/CFP655-GasistaDomiciliario2023-04-225x300.jpg",
      ulr: "https://example.com/ten",
      height: 650,
    },
    {
      id: "11",
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2023/08/CFP-655-PuntoDigital-MantenimientoyReparacion_8.gif",
      ulr: "https://example.com/eleven",
      height: 560,
    },
     {
      id: "13",
      img: "https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2024/12/CFP-AuxiliarCocina_20.gif",
      ulr: "https://example.com/thirteen",
      height: 450,
    },
    
    
    
];


  return (
    

<>
<div className='pt-10 bg-neutral-500'>
  <p className='ml-50 mt-10 text-4xl text-white'><b>TE AYUDAMOS A FORJARTE PARA EL TRABAJO EN EL :</b></p>
    <div className='ml-5 h-50 bg-center m-5 bg-no-repeat bg-[url(https://cfp655esquel.edu.ar/cfp655/wp-content/uploads/2016/04/CFP-N%C2%BA-655-Blanco.png)]'></div>

</div>

<div className='p-10 mt-10'>
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
</div>

<div className=' text-black mt-180 p-35'>
  <h1> <b>Formando para el trabajo</b></h1>
  <br />
  <br />
<p>  <b>El Centro de Formación Profesional N° 655</b> es una Institución dependiente del Ministerio de Educación de la provincia de Chubut. Integra la Red Provincial de Centros de Formación Profesional y se encuentra situado en la ciudad de Esquel, con su Sede Central en el 1036 de la calle Chacabuco de esa localidad.</p>
<br />
<p>Actualmente, además de la  <b>Sede Central</b>, en la que funcionan los talleres de Mecánica, Construcciones Civiles, Informática, Administración, etc., posee un anexo ubicado en la calle Sáenz Peña 2627 correspondiente a las áreas de Carpintería y Gastronomía.</p>
<br />
<p>  <b>El Centro de Formación Profesional N° 655</b> tiene una trayectoria de 30 años en la ciudad de Esquel brindando a jóvenes y adultos los estudios y aprendizajes que les permitan lograr una efectiva inserción laboral, propiciando también la reinserción o actualización laboral de aquellas personas que así lo deseen y persiguiendo el objetivo principal de ampliar y adaptar el conocimiento y habilidades de los actuales y futuros trabajadores.</p>
<br />
<p>Todas las capacitaciones que dicta este Centro son absolutamente gratuitas cumpliendo de esta manera la disposición provincial de acercar a todos aquellos interesados, los medios para mejorar su situación de empleabilidad.</p>
<br />
<p>Para financiar el mantenimiento de los talleres y continuar creciendo, el Centro posee un fondo común para el mantenimiento de máquinas y herramientas que es de carácter voluntario, además de presentar permanentemente proyectos de financiación a entes Nacionales como el INET (Instituto Nacional de Educación Tecnológica) o Provinciales como la Secretaría de Trabajo de la Provincia.</p>
<br />
<p>Gracias a diferentes líneas crediticias del INET, como los denominados <b>“Planes de Mejoras Institucionales”</b> o <b>“Planes Equipar”</b>, este Centro ha  actualizado el equipamiento y herramientas de talleres como el de la Industria de la Madera, Mecánica, Electricidad, Gastronomía, etc. Asimismo, y utilizando las mismas líneas de desarrollo, se han adquirido los equipos necesarios para contar con un moderno gabinete informático y una completa biblioteca Técnica.</p>
<br />
<p>Trabajando en conjunto con la Secretaría de Trabajo de la Provincia, el Centro ha adquirido diferentes equipos, herramientas e insumos que posibilitaron el exitoso dictado de cursos y capacitaciones a distintas localidades próximas a Esquel.</p>
<br />
<p><b>El Centro de Formación Profesional N° 655</b> ha crecido exponencialmente desde su creación, llegando en la actualidad a capacitar a más de 700 individuos por año, que de esta forma logran acceder a un trabajo o mejorar su situación laboral, cumpliendo de esta manera con la premisa fundamental de la Formación Profesional: <b>Capacitar a las personas para el desempeño cualificado en las distintas profesiones, posibilitando el acceso al empleo o a una mejor posición laboral, logrando así una participación activa de las mismas en la vida social, cultural y económica.</b></p>
<br />
<h1> <b>Cursos para realizar:</b></h1>
<br />
  <li> <b>Mantenimiento y Reparacion de Equipos Informaticos</b></li>
  <br />
  <li> <b>Asistente para la Administracion</b></li>
  <br />
  <li> <b>Diseño y Administrador de Paginas Web</b></li>
  <br />
  <li> <b>Mantenimiento de Edificios</b></li>
  <br />
  <li> <b>Mecanico de Motores de Combustion Interna</b></li>
  <br />
  <li> <b>Community Manager</b></li>
  <br />
  <li> <b>Informática Multimedial</b></li>
  <br />
  <li> <b>Operador de PC</b></li>
  <br />
  <li> <b>Asistente de Compras </b></li>
  <br />
  <li> <b>Auxiliar Panadero y Repostero </b></li>
  <br />
  <li> <b>Mozo – Camarero de Salón </b></li>
  <br />
  <li> <b>Auxiliar en Instalaciones Eléctricas Domiciliarias </b></li>
  <br />
  <li> <b>Anfitrión Turístico </b></li>
  <br />
  <li> <b>Auxiliar de Cocina </b></li>
  <br />
  <li> <b>Auxiliar de Cocina</b></li>
  <br />
  <li> <b>Mantenimiento de Edificios</b></li>
  <br />
  <li> <b>Armador y Montador de Plataformas y Entramados de Componentes en Madera </b></li>
  <br />
  <li> <b>Auxiliar en Instalaciones Eléctricas Domiciliarias </b></li>
  <br />
  <li> <b>Operador de Máquinas de Carpintería</b></li>
  <br />
  <li> <b>Carpintero de Terminaciones de Obra</b></li>
  <br />
  <li> <b>Armador de Muebles de Placa</b></li>
  <br />
  <li> <b>Cocinero</b></li>
  <br />
  <li> <b>Panadero</b></li>
  <br />
  <li> <b>Herrero Básico (Articulación Municipalidad Esquel) </b></li>
  <br />
  <li> <b>Herrero Básico (Institucional)</b></li>
  <br />
  <li> <b>Electricista de Automotores </b></li>
  <br />
  <li> <b>Informante Turístico</b></li>
  <br />
  <li> <b>Mozo – Camarero de Salón</b></li>
  <br />
  <li> <b>Mantenimiento y Reparación de Equipos Informáticos</b></li>
  <br />
  <li> <b>Asistente para la Administración</b></li>
  <br />
  <li> <b>Diseñador y Administrador de Páginas Web</b></li>
  <br />
  <li> <b>Montador Electricista Domiciliario</b></li>
  <br />
  <li> <b>Auxiliar Mecánico de Motores Nafteros </b></li>
  <br />
  <li> <b>Community Manager </b></li>
  <br />
  <li> <b>Informática Multimedial </b></li>
  <br />
  <li> <b>Operador de PC</b></li>
  <br />
  <li> <b>Auxiliar de Cocina</b></li>

  </div>

</>
      
  )
  
}


export default page
