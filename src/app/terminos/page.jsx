import Image from "next/image";
import { Poppins } from "next/font/google";

export default function TerminosPage() {
  return (
    <div className="min-h-screen py-10 px-6 flex justify-center">
      <div className=" shadow-lg rounded-2xl p-8 w-full max-w-3xl">

<div className="absolute top-40 left-15 hidden lg:block">

<Image
src="/logo2.png"
width={200}
height={110}
alt="logo"
className="center"
/>
</div>



        <h1 className="text-2xl font-semibold mb-6 text-center text-red-700">
          Términos y Condiciones
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-center">
          <p>
            <strong>1. Aceptación de los Términos:</strong> Al registrarse en nuestra
            plataforma, el usuario acepta cumplir con las normas de uso y
            políticas internas establecidas por la empresa.
          </p>

          <p>
            <strong>2. Uso del Servicio:</strong> Cualquier uso indebido o
            con fines fraudulentos podrá dar lugar a la baja inmediata del usuario.
          </p>

          <p>
            <strong>3. Privacidad de los Datos:</strong> La información personal y
            comercial proporcionada será tratada de forma confidencial y utilizada
            únicamente para fines administrativos del sistema.
          </p>

          <p>
            <strong>4. Responsabilidad:</strong> La empresa no se hace responsable por
            pérdidas, errores o daños derivados del uso del servicio, aunque se
            compromete a mantener su correcto funcionamiento.
          </p>

          <p>
            <strong>5. Modificaciones:</strong> La empresa se reserva el derecho de
            modificar estos términos sin previo aviso. Las actualizaciones se
            publicarán en el sitio web.
          </p>

          <p className="text-center">
            <strong>6. Contacto:</strong> Ante cualquier duda o reclamo, el usuario
            podrá comunicarse al correo <strong>cfp655@cfp655esquel.com.ar</strong>
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/registro/usuario"
            className="text-blue-600 strong hover:underline font-medium"
          >
            ← Volver al registro
          </a>
        </div>
      </div>
    </div>
  );
}