"use client"
import React from 'react'
import Main from '@/app/componentes/Main'
import axios from "axios";
import { useState, useEffect } from 'react' 
import Empleo from '../models/jobs'



const page = () => {
 
  return (
    <div>
  
      <p className="text-black text-5xl text-center mt-10 mb-20"> Bolsa de empleo </p>
      <Main />
     
      
    </div>

  )
}

export default page
