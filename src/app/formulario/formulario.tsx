"use client";
import React, { useState } from "react";
import axios from "axios";
const baseURL= "https://bolsa-de-empleo-cfp.vercel.app/api/jobs";

const FormJob = () => {
  const [form, setForm] = useState({  
    title: "",
    description: "",
    company:"690a8373d3905f1dd380508c",
    type:"",
    location: "",
  });


function createPost(){ 
  axios.post(baseURL,form)
}
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost()
    alert("Se creo con exito el trabajo")
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ffffff] text-white p-8">
      <div className="bg-[#cfcfcf] p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-[#000000]">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
          Publicar un trabajo
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
           
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Título del trabajo (ej: Electricista)"
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          
          
        
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción del trabajo"
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500 h-32 resize-none"
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Ubicación (ej: Esquel)"
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:border-blue-500"
          />



          <select
            name="type"
            value={form.type}
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
