"use client"
import React from 'react'
import Header from '@/app/componentes/Header'
import Main from '@/app/componentes/Main'
import axios from "axios";
import { useState, useEffect } from 'react' 
import Empleo from '../models/jobs'



const page = () => {
  const [filtro,setFiltro]=useState('')
  const [data,setData]=useState<Empleo[]>([])

  useEffect(() => {
    axios.get('https://bolsa-de-empleo-cfp.vercel.app/api/jobs').then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;
//mongodb+srv://naticayul_db_user:GqHsLJpHq6fa6Btl@cluster0.lnaccnw.mongodb.net/?appName=Cluster0
  return (
    <div>
      <Header/>
      <p className="text-black text-5xl text-center mt-10 mb-20"> Bolsa de empleo </p>
      <Main />
      {data.map((item, i)=>{

          var date = new Date(item.createdAt);
          return (
          <div key={i} className="text-black mt-10 w-2/3 ">
                    <h1> {item.title} </h1>
                    <h1> {item.location} </h1>
                    <h1> publicado el dia: {date.toLocaleDateString()} </h1>
            </div>
          )
       })}
      
    </div>

  )
}

export default page
