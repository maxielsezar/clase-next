"use client"
import React from "react"
import Form from "@/app/componentes/Styled-Components2";

const page = () => {

return(

<>

<div className="bg-linear-to-r/hsl from-indigo-500 to-teal-400 text-6xl p-8 flex justify-center">BOLSA DE EMPLEO</div>
<br />
<br />

<div className="bg-linear-to-r/hsl from-indigo-500 to-teal-400 p-4 text-3xl w-50">Postulate</div>
<br />

<div className="flex justify-center text-3xl">
    <h3 className="text-white  bg-black w-max">
        Crea tu curriculum vitae y de esta manera quedas 
        <br /> 
        postulado para ofertas laborales presentes y futuras
    </h3>
    
</div>

<br />

    <div className="flex justify-center"><Form/> </div>
    <br />


    <div className="bg-linear-to-r/decreasing from-indigo-500 to-teal-400 p-8 flex justify-center">El CFP Nº 655 (Centro De Formacion Profesional)
    <br />
    es un instituto donde puedes realizar varios cursos <br /> que te pueden ayudar a tener futuras ofertas de trabajos
    <br />
    <br />
    <a href="https://cfp655esquel.edu.ar/cfp655/"><img src={"/CFP-Nº-655-Blanco.png"}></img></a>
     

    <div className="ml-50">

        
        <ul>
            <li>Sede Chacabuco 1036 – Esquel – Chubut</li>
            <li>Telefono: 2945 453449</li>
            <li>
                <a href="mailto:centro655@cfp655esquel.edu.ar">Mail:centro655@cfp655esquel.edu.ar</a>
                </li>
        </ul>
    </div>
    </div>


    

    







</>









)

}

export default page