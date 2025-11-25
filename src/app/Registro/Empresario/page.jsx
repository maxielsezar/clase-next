"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import React from "react";

const baseURL = "https://bolsa-de-empleo-cfp.vercel.app/api/users";


export default function RegistroEmpresario() {
  const [form, setForm] = useState({
    name: "",
    lastName:"",
    email: "",
    tel: "",
    password:"",
  });
  function createPost() {
    axios.post(baseURL, form)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }
    if (!form.aceptar) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

   createPost()
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">

<div className="absolute top-40 left-20 hidden md:block">

<Image
src="/logo2.png"
width={200}
height={110}
alt="logo"
className="center"
/>
</div>

<div className="absolute top-40 right-20 hidden md:block">

<Image
src="/logo2.png"
width={200}
height={110}
alt="logo"
className="center"
/>
</div>


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-900">
          Crear cuenta de empresario
        </h1>

  
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Datos personales
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-black">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={form.lastName}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full"
          />


          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="tel"
            name="tel"
            placeholder="Teléfono"
            value={form.tel}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="password"
            name="confirmar"
            placeholder="Confirmar contraseña"
            value={form.confirmar}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full"
          />
        </div>

      
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Datos de la empresa
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-black">
          <input
            type="text"
            name="empresa"
            placeholder="Nombre de la empresa"
            value={form.empresa}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full"
          />

          <select
            name="rubro"
            value={form.rubro}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full text-gray-700"
          >
            <option value="">Seleccionar rubro</option>
            <option value="Restaurante">Restaurante</option>
            <option value="Cafetería">Cafetería</option>
            <option value="Pastelería">Pastelería</option>
            <option value="Proveedor">Proveedor</option>
            <option value="Otro">Otro</option>
          </select>
        </div>


        {/* ACEPTACIÓN */}
        <label className="flex items-center text-sm mb-6">
          <input
            type="checkbox"
            name="aceptar"
            checked={form.aceptar}
            onChange={handleChange}
            className="mr-2"  
            />
          
          
          <h3 className="text-black">Acepto los</h3>
          <a href="/terminos" className="text-blue-600 hover:underline ml-1"> términos y condiciones</a>
        </label>


        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-medium transition"
        >
          Crear cuenta
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          ¿Ya tenés una cuenta?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Iniciá sesión
          </a>
        </p>
      </form>
    </div>
  );
}