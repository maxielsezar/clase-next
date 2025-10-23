import Empleos from '@/app/componentes/Empleos'

interface Empleo{
      puesto:string,
      localidad: string,
      publicación: string
}

export default function ListadoEmpleos(){ 
  const listEmpleos:Empleo[]=[
    {
      puesto:"Anfitrión Turístico ",
      localidad: "Esquel",
      publicación: "Publicado el 22/10/2025"
      }  ,
    {
      puesto:" Asistente de Compras  ",
      localidad: "Trevelin",
      publicación: "Publicado el 22/10/2025"
    }  ,
  ]
  
  const empleosMap= listEmpleos.map ((empleos,i) =>
    <Empleos key={i} empleo={empleos} />
  )
    

return(
    <>
        <div>
            {empleosMap}
        </div>
  
    </>
            
)
}