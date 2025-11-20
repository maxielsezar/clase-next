import Image from "next/image";
import Radio from '@/app/componentes/Radio'
import Radio2 from '@/app/componentes/Radio2'
import ButtonSesion from '@/app/componentes/ButtonSesion'

export default function Nav() {
  return (
    <nav className="mt-3">
      <div className="flex justify-evenly mt-3 h-7">
  
        <Radio/>
        <Radio2/>
        <ButtonSesion/>
      </div>
    </nav>
  );
}