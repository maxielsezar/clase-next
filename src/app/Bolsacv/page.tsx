"use client"
import React from "react"
import Form from "@/app/componentes/Styled-Components2";

const page = () => {

return(

<>

<div className=" bg-linear-to-r/hsl from-indigo-500 to-teal-400 text-6xl p-8 flex justify-center">BOLSA DE EMPLEO</div>
<br />
<br />

<div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 text-3xl w-50">Postulate</div>
<br />

<div className=" flex justify-center text-3xl">
    <h3 className="text-white  bg-black w-max">
        Crea tu curriculum vitae y de esta manera quedas 
        <br /> 
        postulado para ofertas laborales presentes y futuras
    </h3>
    
</div>

<br />

<div className="bg-blue-600"></div>


    <div className="flex justify-center"><Form/> </div>








</>









)

}

export default page