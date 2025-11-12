"use client";
import { useState } from "react";

export default function CargarCV() {
  const [formDataExp, setFormDataExp] = useState(
    {
      id:"",
      titulo: "",
      descripcion: "",
      lugar: "",
      fechaInicio: "",
      fechaFin: "",
    })
  

  const [formDataEst, setFormDataEst] = useState({
    nuevoEstudio: {
      id:"",
      nombre: "",
      instituto: "",
      lugar: "",
      fechaInicio: "",
      fechaFin: "",
    },
  });


  

  const [preview, setPreview] = useState(null);

  // Manejo de cambio general
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto" && files?.[0]) {
      const file = files[0];
      setFormData({ ...formData, foto: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    }
  };

  // EXPERIENCIAS
  const handleExperienciaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      nuevaExperiencia: { ...formDataExp.nuevaExperiencia, [name]: value },
    });
  };

  const agregarExperiencia = () => {
    const { titulo, descripcion, lugar, fechaInicio, fechaFin } =
      formDataExp.nuevaExperiencia;
    if (titulo && descripcion && lugar && fechaInicio && fechaFin) {
      setFormData({
        ...formData,
        experiencias: [...formDataExp.experiencias, formDataExp.nuevaExperiencia],
        nuevaExperiencia: {
          titulo: "",
          descripcion: "",
          lugar: "",
          fechaInicio: "",
          fechaFin: "",
        },
      });
    } else {
      alert("Completá todos los campos de la experiencia antes de agregarla.");
    }
  };

  const eliminarExperiencia = (index) => {
    const nuevas = [...formDataExp.experiencias];
    nuevas.splice(index, 1);
    setFormData({ ...formDataExp, experiencias: nuevas });
  };

  // ESTUDIOS
  const handleEstudioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      nuevoEstudio: { ...formData.nuevoEstudio, [name]: value },
    });
  };

  const agregarEstudio = () => {
    const { nombre, instituto } = formData.nuevoEstudio;
    if (nombre && instituto) {
      setFormData({
        ...formData,
        estudios: [...formData.estudios, formData.nuevoEstudio],
        nuevoEstudio: { nombre: "", instituto: "" },
      });
    } else {
      alert("Completá ambos campos del estudio antes de agregarlo.");
    }
  };

  const eliminarEstudio = (index) => {
    const nuevas = [...formData.estudios];
    nuevas.splice(index, 1);
    setFormData({ ...formData, estudios: nuevas });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    alert("Tu CV fue enviado correctamente ✅");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Cargar Curriculum Vitae
        </h1>

        {/* FOTO DE PERFIL */}
        <div className="flex flex-col items-center">
          <label className="block text-gray-700 font-medium mb-2">
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
            onChange={handleChange}
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
              value={formDataExp.nuevaExperiencia.titulo}
              onChange={handleExperienciaChange}
              placeholder="Título del puesto (ej: Vendedor)"
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="lugar"
              value={formDataExp.nuevaExperiencia.lugar}
              onChange={handleExperienciaChange}
              placeholder="Lugar o empresa"
              className="w-full border rounded-lg px-3 py-2"
            />
            <textarea
              name="descripcion"
              value={formDataExp.nuevaExperiencia.descripcion}
              onChange={handleExperienciaChange}
              placeholder="Descripción de tareas"
              className="w-full border rounded-lg px-3 py-2"
              rows="2"
            />


<div className="flex gap-4">
  <div className="flex flex-col flex-1">
    <label className="text-gray-700 text-sm mb-1">Fecha de inicio</label>
    <input
      type="date"
      name="fechaInicio"
      value={formDataExp.nuevaExperiencia.fechaInicio}
      onChange={handleExperienciaChange}
      className="border rounded-lg px-3 py-2"
    />
  </div>
  <div className="flex flex-col flex-1">
    <label className="text-gray-700 text-sm mb-1">Fecha de salida</label>
    <input
      type="date"
      name="fechaFin"
      value={formDataExp.nuevaExperiencia.fechaFin}
      onChange={handleExperienciaChange}
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
            {formDataExp.experiencias.map((exp, index) => (
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

        {/* ESTUDIOS REALIZADOS */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Estudios realizados
          </h2>

          <div className="space-y-2">
            <input
              type="text"
              name="nombre"
              value={formData.nuevoEstudio.nombre}
              onChange={handleEstudioChange}
              placeholder="Nombre del estudio (ej: Lic. en Administración)"
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="instituto"
              value={formData.nuevoEstudio.instituto}
              onChange={handleEstudioChange}
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
            {formData.estudios.map((est, index) => (
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

        {/* ARCHIVO */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Subir CV (PDF o Word)
          </label>
          <input
            type="file"
            name="archivo"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* BOTÓN ENVIAR */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar CV
        </button>
      </form>
    </div>
  );
}