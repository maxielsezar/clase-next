import Image from "next/image";
import Menu from '@/app/componentes/Menu'

export default function Main() {
  return (
    <>
    
      <div className="flex text-black justify-center">
        <p className="mr-10"> Filtrar por puesto </p>
        <Menu/>
     
      </div>

    </>
  );
}