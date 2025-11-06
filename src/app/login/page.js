"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/", // redirige al home si todo va bien
    });
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-80">



        
        <h1 className="text-xl font-bold mb-4 text-center text-black">Iniciar sesión</h1>

        {/* --- Login manual --- */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 text-black"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded p-2 text-black"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 rounded py-2 mt-2 hover:bg-blue-600 text-black"
          >
            Entrar
          </button>
        </form>

        {/* --- Separador --- */}
        <div className="my-4 text-center text-gray-500">o</div>

        {/* --- Login con Google --- */}
        <button
        type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="bg-red-500 rounded py-2 w-full hover:bg-red-600 text-black"
        >
          Iniciar sesión con Google
        </button>

        <p className="text-sm text-black mt-4 text-center">
          ¿No tenés cuenta? <a href="/registro" className="text-blue-500 underline">Registrate</a>
        </p>
      </div>
    </div>
  );
}