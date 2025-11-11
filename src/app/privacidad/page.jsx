import Image from "next/image";



export default function PrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 justify-center">
  
      <h1 className="text-3xl font-bold mb-6 text-red-800 text-center">Política de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-8 text-center">Última actualización: 23 de octubre de 2025</p>


<div className="absolute top-40 left-5 ">

<Image
src="/logo2.png"
width={200}
height={110}
alt="logo"
className="center"
/>
</div>

<div className="absolute top-40 right-5 ">

<Image
src="/logo2.png"
width={200}
height={110}
alt="logo"
className="center"
/>
</div>



      <section className="space-y-6 leading-relaxed">
        <p>
          En <strong>CFP 655</strong>, valoramos tu privacidad y nos comprometemos a proteger la información personal
          que compartís con nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos
          cuando navegás o utilizás nuestros servicios.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">1. Información que recopilamos</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Datos de uso:</strong> información sobre tu actividad en el sitio, como las páginas que visitás, el tiempo de permanencia o el tipo de dispositivo que usás.</li>
            <li><strong>Datos de contacto (opcional):</strong> si completás formularios, podés brindar tu nombre, correo electrónico u otros datos.</li>
            <li><strong>Cookies:</strong> usamos cookies para mejorar tu experiencia, recordar tus preferencias y analizar el tráfico.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">2. Uso de la información</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Mejorar el funcionamiento y contenido del sitio.</li>
            <li>Personalizar tu experiencia según tus preferencias.</li>
            <li>Enviar información o notificaciones, solo si vos lo aceptás.</li>
            <li>Detectar posibles problemas técnicos o intentos de uso indebido.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">3. Compartir información con terceros</h2>
          <p>
            No vendemos ni alquilamos tus datos personales. Podemos compartir información anónima o estadística con herramientas
            de análisis (como Google Analytics) para entender cómo se usa el sitio, pero <strong>nunca información que te identifique directamente</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">4. Cookies y tecnologías similares</h2>
          <p>
            Podés configurar tu navegador para rechazar cookies o eliminar las ya guardadas. Tené en cuenta que algunas
            funciones del sitio podrían no funcionar correctamente si las desactivás.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">5. Seguridad de los datos</h2>
          <p>
            Implementamos medidas razonables para proteger tu información frente a accesos no autorizados, pérdida o alteración.
            Sin embargo, ningún método de transmisión en Internet es 100% seguro, por lo que no podemos garantizar una seguridad absoluta.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">6. Enlaces a sitios de terceros</h2>
          <p>
            Nuestro sitio puede contener enlaces a otros sitios web. No somos responsables de las políticas de privacidad ni del contenido de esas páginas externas.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">7. Derechos del usuario</h2>
          <p>
            Podés solicitar en cualquier momento acceder a tus datos personales, pedir su corrección o eliminación,
            o retirar tu consentimiento para su uso. Para hacerlo, escribinos a <strong>cfp655@cfp655esquel.com.ar</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">8. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos la fecha de la última actualización
            y, si hay cambios importantes, lo indicaremos claramente en el sitio.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">9. Contacto</h2>
          <p>
            Si tenés dudas o comentarios sobre esta política, podés comunicarte con nosotros a:{" "}
            <strong>cfp655@cfp655esquel.com.ar</strong>
          </p>
        </div>
      </section>
    </div>

  );
}