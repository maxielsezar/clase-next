export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo o nombre */}
        <h2 className="text 2x1 font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">CFP 655</h2>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="/terminos" className="hover:text-white transition-colors">
            Términos
          </a>
          <a href="/privacidad" className="hover:text-white transition-colors">
            Privacidad
          </a>
          <a href="/contacto" className="hover:text-white transition-colors">
            Contactanos
          </a>
        </div>

        {/* Copyright */}
       <h2 className="text-white text-lg font-bold border-b-2 border-green-400 pb-1 inline-block">
          © {new Date().getFullYear()} CFP 655. Todos los derechos reservados.
        </h2>
      </div>
    </footer>
  );
}


