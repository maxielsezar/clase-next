"use client";
import React, { useState } from "react";
import AnimatedList from "./lista";

interface Trabajo{
  puesto:string;
  lugar:string;
  fecha:string;
}

const empleos:Trabajo[] = [
  { puesto: "Maestro panadero", lugar: "Panadero – ESQUEL", fecha: "Publicado 17/08/2025" },
  { puesto: "Electricista montador", lugar: "Electricista - TREVELIN", fecha: "Publicado 10/08/2025" },
  { puesto: "Gasista", lugar: "Gasista- ESQUEL", fecha: "Publicado 09/08/2025" },
  { puesto: "Encargado de mantenimiento de edificio", lugar: "Mantenimiento de edificio - ESQUEL", fecha: "Publicado 09/08/2025" },
  { puesto: "Auxiliar de cocina", lugar: "Bachero y auxiliar de cocina- ESQUEL", fecha: "Publicado 09/08/2025" },
];

export default function Page() {
  const [filtro, setFiltro] = useState("Todos los puestos");

  const puestosUnicos = ["Todos los puestos", ...new Set(empleos.map((e) => e.puesto))];
  const empleosFiltrados =
    filtro === "Todos los puestos" ? empleos : empleos.filter((e) => e.puesto === filtro);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060010] text-white p-6">
      <div className="flex flex-col items-center justify-center bg-[#0b001d] rounded-3xl shadow-2xl p-10 w-full ">
        <h1 className="text-6xl font-bold mb-8 text-blue-400">Bolsa de empleo</h1>

        <p className="text-2xl mb-4">Filtrar por puesto</p>
        <p className="text-2xl mb-4 text-blue-400">Todos los puestos</p>
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="text-lg text-black rounded-lg p-2 mb-8 w-2/3 max-w-sm"
        >
          {puestosUnicos.map((puesto, i) => (
            <option key={i} value={puesto}>
              {puesto}
            </option>
          ))}
        </select>
        {

        }
        <AnimatedList
          items={empleosFiltrados}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
        />
      </div>
    </div>
  );
}
