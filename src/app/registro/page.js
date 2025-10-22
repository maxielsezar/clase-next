"use client";
import { useState } from "react";
import Image from "next/image";

export default function RegistroEmpresario() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    rubro: "",
    cuit: "",
    razonSocial: "",
    iva: "",
    direccion: "",
    localidad: "",
    provincia: "",
    codigoPostal: "",
    password: "",
    confirmar: "",
    aceptar: false,
  });

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

    console.log("Datos de registro:", form);
    // Acá podés agregar tu lógica de registro (Firebase o API)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">

<div className="absolute top-40 left-20 ">

<Image
src="/logo.jpg"
width={200}
height={110}
className="center"
/>
</div>

<div className="absolute top-40 right-20 ">

<Image
src="/logo.jpg"
width={200}
height={110}
className="center"
/>
</div>


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Crear cuenta de empresario
        </h1>

  
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Datos personales
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-black">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
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
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
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

    
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Datos de facturación
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-black">
          <input
            type="text"
            name="cuit"
            placeholder="CUIT / DNI"
            value={form.cuit}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full"
          />

          <input
            type="text"
            name="razonSocial"
            placeholder="Razón social"
            value={form.razonSocial}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />

          <select
            name="iva"
            value={form.iva}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full text-gray-700"
          >
            <option value="">Condición frente al IVA</option>
            <option value="Responsable Inscripto">Responsable Inscripto</option>
            <option value="Monotributista">Monotributista</option>
            <option value="Exento">Exento</option>
            <option value="Consumidor Final">Consumidor Final</option>
          </select>

          <input
            type="text"
            name="direccion"
            placeholder="Dirección comercial"
            value={form.direccion}
            onChange={handleChange}
            required
            className="border p-2 rounded-lg w-full"
          />

          <input
            type="text"
            name="localidad"
            placeholder="Localidad"
            value={form.localidad}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />

          <input
            type="text"
            name="provincia"
            placeholder="Provincia"
            value={form.provincia}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />

          <input
            type="text"
            name="codigoPostal"
            placeholder="Código postal"
            value={form.codigoPostal}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />
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