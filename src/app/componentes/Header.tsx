import Image from "next/image";
import Radio from '@/app/componentes/Radio'
import Radio2 from '@/app/componentes/Radio2'
import ButtonSesion from '@/app/componentes/ButtonSesion'

export default function Header() {
  return (
    <>
    
      <div className="flex justify-around mt-10">
        <Image src="/cfp655.png" width={200} height={30} alt="hola"  />
        <Radio/>
        <Radio2/>
        <ButtonSesion/>
      </div>
    </>
  );
}