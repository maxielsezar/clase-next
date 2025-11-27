import Providers from "./providers"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/componentes/Footer";
import { Poppins } from "next/font/google";
import BotonRedesSociales from "./componentes/BotonRedesSociales";
import Header from "./componentes/Header";
import Nav from "./componentes/nav";

const poppins= Poppins ({

  subsets:["latin"],
  weight:["400","600","700"],

});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bolsa de empleo CFP 655 Esquel",

  description:"Bolsa de empleo del Centro de Formacion Profesional 655 para conseguir trabajo o cargar tu Curriculum Vitae",

  authors: [{ name: "Estudiantes del CFP Nº655"}],

    icons:{
    icon:"/icon.png",
    shortcut:"/icon.png",
    apple:"apple-icon.png"
  },

  keywords: ["bolsa de empleo", "trabajos", "Electricista", "Gasista", "CFP", "Esquel", "empleos en esquel", "busqueda laboral en Esquel", "consegui trabajo en Esquel", "Curriculum Vitae en Esquel"]

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body className={poppins.className}>

<Header />
<Nav />
<main className="p-2">
<Providers>
        {children}

</Providers>
<BotonRedesSociales />
<Footer />
</main>
      </body>
    </html>
  );
}
