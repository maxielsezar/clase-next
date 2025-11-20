import React from 'react'
import { FaFacebook, FaInstagram, FaGlobe  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const BotonRedesSociales = () => {
  return (

      
      <div className="fixed right-6 top-1/3 flex flex-col gap-4 z-50">

<a
  href="https://www.facebook.com/Centro655"
  target="_blank"
  className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center text-xl"
>
  <FaFacebook />
</a>

<a
  href="https://www.instagram.com/cfp655esquel/"
  target="_blank"
  className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all flex items-center justify-center text-xl"
>
  <FaInstagram />
</a>

<a
        href="mailto:centro655@cfp655esquel.edu.ar"
        className="bg-white shadow-lg rounded-full p-3 text-2xl hover:scale-110 transition"
      >
        <MdEmail className="text-black" />
      </a>

      <a
        href="https://wa.me/5492945453449"
        target="_blank"
        className="bg-white shadow-lg rounded-full p-3 text-2xl hover:scale-110 transition"
      >
        <FaWhatsapp className="text-green-600" />
      </a>


<a
  href="https://cfp655esquel.edu.ar"
  target="_blank"
  className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all flex items-center justify-center text-xl"
>
  <FaGlobe />
</a>
</div>


  )
}

export default BotonRedesSociales;

