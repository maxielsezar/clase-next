"use client"
import Empleos from '@/app/componentes/Empleos'


export default function ListadoEmpleos(){ 
  const listEmpleos:Empleo[]=[
    {
      puesto:"Anfitrión Turístico",
      localidad: "Esquel",
      publicación: "Publicado el 22/10/2025"
      }  ,
    {
      puesto:" Asistente de Compras  ",
      localidad: "Trevelin",
      publicación: "Publicado el 22/10/2025"
    }  ,
  ]
  const listaFiltrada =listEmpleos.filter((item)=>item.puesto)
  const empleosMap= listaFiltrada.map ((empleos,i) =>
    <Empleos key={i} puesto={empleos.puesto}  localidad={empleos.localidad} publicación={empleos.publicación} />
  )
    

return(
    <>
        <div>
            {empleosMap}
        </div>
  
    </>
            
)
}