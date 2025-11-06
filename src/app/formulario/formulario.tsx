"use client";
import React, { useState } from "react";

const FormJob = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    titulo: "",
    descripcion: "",
    locacion: "",
    tipo: "",
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", form);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060010] text-white p-8">
      <div className="bg-[#0b001d] p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-[#1c0033]">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
          Publicar un trabajo
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="nombre"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título del trabajo (ej: Electricista)"
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Descripción del trabajo"
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500 h-32 resize-none"
          />

          <input
            name="locacion"
            value={form.locacion}
            onChange={handleChange}
            placeholder="Ubicación (ej: Esquel)"
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500"
          >
            <option value="">Seleccionar tipo</option>
            <option value="full-time">Tiempo completo</option>
            <option value="part-time">Medio tiempo</option>
            <option value="temporal">Temporal</option>
          </select>

          <button
            type="submit"
            className="mt-4 bg-blue-700 hover:bg-blue-800 transition-all p-3 rounded-lg font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormJob;
