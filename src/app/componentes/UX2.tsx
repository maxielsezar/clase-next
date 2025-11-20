"use client"
import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react' 
import Empleo from '../models/jobs'



const UX2 = () => {

const [filtro,setFiltro]=useState('')
const [data,setData]=useState<Empleo[]>([])

useEffect(() => {
    axios.get('https://bolsa-de-empleo-cfp.vercel.app/api/jobs').then((response) => {
    setData(response.data);
    });
}, []);

if (!data) return null;

return (
    <div>

 {data.map((item, i)=>{

        const date = new Date(item.createdAt);
        return (
        <div key={i} className="text-black mt-10 w-2/3 ">
                    <h1> {item.title} </h1>
                    <h1> {item.location} </h1>
                    <h1> Publicado el dia: {date.toLocaleDateString()} </h1>
            </div>
        )
    })}


    </div>
  )
}

export default UX2
