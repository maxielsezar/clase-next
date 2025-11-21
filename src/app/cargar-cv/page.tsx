"use client";
import { useState } from "react";
import Experiencia from "../models/experiencia";
import Estudios from "../models/estudios";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Upload from "../componentes/Upload";
import React ,{ ChangeEvent } from 'react';


export default function CargarCV() {
  const [ListaExperiencia, setListaExperiencia] = useState<Experiencia[]>([]);
  const [ListaEstudios, setListaEstudios] = useState<Estudios[]>([]);

  const [formExperiencia, setFormExperiencia] = useState<Experiencia>({
    id: "",
    titulo: "",
    descripcion: "",
    lugar: "",
    fechaInicio: "",
    fechaFin: ""
  });

  const [formEstudio, setFormEstudio] = useState<Estudios>({
    id: "",
    nombre: "",
    instituto: "",
    lugar: "",
    fechaInicio: "",
    fechaFin: ""
  });

  const [preview, setPreview] = useState<string>("");

  // Manejador de cambios general para INPUTS y TEXTAREAS
  // Usa ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Determina si el campo pertenece a Experiencia o Estudio y actualiza el estado correspondiente
    if (Object.keys(formExperiencia).includes(name)) {
      setFormExperiencia(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else if (Object.keys(formEstudio).includes(name)) {
       setFormEstudio(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    // Si tienes otros formularios, puedes añadir más lógica aquí.
  };


  // Manejador para la carga de archivos (foto de perfil)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.[0]) {
      const file = files[0];
      setPreview(URL.createObjectURL(file));
    }
  };


  // EXPERIENCIAS
  // Usamos handleInputChange para todos los inputs de experiencia
  // const handleExperienciaChange = handleInputChange; // Puedes usar este alias si quieres mantener el nombre

  const agregarExperiencia = () => {
    const inicio = new Date(formExperiencia.fechaInicio);
    const fin = new Date(formExperiencia.fechaFin);

    if (isNaN(inicio.getTime())) {
      alert("Las fechas no son validas");
      return;
    }

    if (fin < inicio) {
      alert("La fecha de salida no puede ser anterior a la fecha de inicio");
      return;
    }

    if (formExperiencia.titulo && formExperiencia.descripcion && formExperiencia.lugar) {
      if (!formExperiencia.fechaFin) { formExperiencia.fechaFin = "continua" }
      setListaExperiencia(
        [...ListaExperiencia, formExperiencia]
      );
    } else {
      alert("Completá todos los campos de la experiencia antes de agregarla.");
    }
  };

  const eliminarExperiencia = (indiceAEliminar: number) => {
    const listaActualizada = [
      ...ListaExperiencia.slice(0, indiceAEliminar),
      ...ListaExperiencia.slice(indiceAEliminar + 1)
    ];
    setListaExperiencia(listaActualizada);
  };

  // ESTUDIOS
  // Usamos handleInputChange para todos los inputs de estudio
  // const handleEstudioChange = handleInputChange; // Puedes usar este alias si quieres mantener el nombre

  const agregarEstudio = () => {
    const { nombre, instituto } = formEstudio;
    if (nombre && instituto) {
      setListaEstudios(
        [...ListaEstudios, formEstudio]
      );
    } else {
      alert("Completá ambos campos del estudio antes de agregarlo.");
    }
  };

  const eliminarEstudio = (indiceAEliminar: number) => {
    const listaActualizada = [
      ...ListaEstudios.slice(0, indiceAEliminar),
      ...ListaEstudios.slice(indiceAEliminar + 1)
    ];
    setListaEstudios(listaActualizada);
  };

  // Manejador del SUBMIT (ya estaba bien definido)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos del formulario:", formEstudio);
    alert("Tu CV fue enviado correctamente ✅");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <form
        onSubmit={handleSubmit} // Esto ahora funciona correctamente
        className="p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center">
          Cargar CV
        </h1>

        {/* FOTO DE PERFIL */}
        <div className="flex flex-col items-center">
          <label className="block text-black font-medium mb-2">
            Foto de perfil
          </label>
          {preview ? (
            <img
              src={preview}
              alt="Vista previa"
              className="w-28 h-28 object-cover rounded-full mb-3 border"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center mb-3">
              <span className="text-gray-500 text-sm">Sin foto</span>
            </div>
          )}
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleChange} // Usa handleChange para el input de tipo file
            className="text-sm text-gray-600"
          />
        </div>

        {/* EXPERIENCIA LABORAL */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Experiencia laboral
          </h2>

          <div className="space-y-2">
            <input
              type="text"
              name="titulo"
              value={formExperiencia.titulo}
              onChange={handleInputChange} // Usa handleInputChange
              placeholder="Título del puesto (ej: Vendedor)"
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="lugar"
              value={formExperiencia.lugar}
              onChange={handleInputChange} // Usa handleInputChange
              placeholder="Lugar o empresa"
              className="w-full border rounded-lg px-3 py-2"
            />
            <textarea
              name="descripcion"
              value={formExperiencia.descripcion}
              onChange={handleInputChange} // Usa handleInputChange
              placeholder="Descripción de tareas"
              className="w-full border rounded-lg px-3 py-2"
            />

            <div className="absolute top-60 left-17">
              <Image
                src="/logo2.png"
                width={210}
                height={110}
                alt="logo"
                className="center"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-black text-sm mb-1">Fecha de inicio</label>
                <input
                  type="date"
                  name="fechaInicio"
                  value={formExperiencia.fechaInicio}
                  onChange={handleInputChange} // Usa handleInputChange
                  max={new Date().toISOString().split("T")[0]}
                  className="border rounded-lg px-3 py-2"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-black text-sm mb-1">Fecha de salida</label>
                <input
                  type="date"
                  name="fechaFin"
                  value={formExperiencia.fechaFin}
                  onChange={handleInputChange} // Usa handleInputChange
                  max={new Date().toISOString().split("T")[0]}
                  className="border rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={agregarExperiencia}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              ➕ Agregar experiencia
            </button>
          </div>

          {/* Lista de experiencias */}
          <ul className="mt-4 space-y-3">
            {ListaExperiencia.map((exp, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50 flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold text-gray-800">{exp.titulo}</p>
                  <p className="text-sm text-gray-600">
                    {exp.lugar} — {exp.fechaInicio} a {exp.fechaFin}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    {exp.descripcion}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => eliminarExperiencia(index)}
                  className="text-red-500 text-sm ml-3"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Agrega el resto del formulario de estudios usando handleInputChange */}
      </form>


        {/* ESTUDIOS REALIZADOS */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Estudios realizados
          </h2>

          <div className="space-y-2">
            <input
              type="text"
              name="nombre"
              value={formEstudio.nombre}
              onChange={handleInputChange}
              placeholder="Nombre del estudio (ej: Lic. en Administración)"
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="instituto"
              value={formEstudio.instituto}
              onChange={handleInputChange}
              placeholder="Instituto o universidad"
              className="w-full border rounded-lg px-3 py-2"
            />
            <button
              type="button"
              onClick={agregarEstudio}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              ➕ Agregar estudio
            </button>
          </div>

          {/* Lista de estudios */}
          <ul className="mt-4 space-y-3">
            {ListaEstudios.map((est, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50 flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold text-gray-800">{est.nombre}</p>
                  <p className="text-sm text-gray-700">{est.instituto}</p>
                </div>
                <button
                  type="button"
                  onClick={() => eliminarEstudio(index)}
                  className="text-red-500 text-sm ml-3"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Upload />

        {/* BOTÓN ENVIAR */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">


          Enviar CV
          </button>

</div>

  );
}







