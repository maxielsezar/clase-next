"use client"
import React from 'react'
import Header from '@/app/componentes/Header'
import Main from '@/app/componentes/Main'
import axios from "axios";
import { useState, useEffect } from 'react' 
import Empleo from '../models/jobs'



const page = () => {

  const [data,setData]=useState<Empleo[]>([])
  const [selectedValue, setSelectedValue] = useState('');
const itemsUnicosPorTitulo = data.filter((item, index, self) =>
   index === self.findIndex((obj) => obj.title === item.title)
);

console.log(itemsUnicosPorTitulo);


  useEffect(() => {
    axios.get('https://bolsa-de-empleo-cfp.vercel.app/api/jobs').then((response) => {
      setData(response.data);
    });
  }, []);

 const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(selectedValue.toLowerCase())
  );
  
  if (!data) return null;
  return (
    <div>
      <Header/>
      <p className="text-black text-5xl text-center mt-10 mb-20"> Bolsa de empleo </p>
      <form className="flex text-black justify-center" action="#">
          <label form="lang">Filtrar por puesto </label>
          <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
          {data.map((item, index) => (
                  <option value={item.title} key={index}>
                    {item.title}
                  </option>
                ))}
          </select>
        </form>
      {filteredData.map((item, i)=>{

          var date = new Date(item.createdAt);
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

export default page
