
import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react' 
import Empleo from '../models/jobs'



export default function Main() {

  const [data,setData]=useState<Empleo[]>([])



 useEffect(() => {
    axios.get('https://bolsa-de-empleo-cfp.vercel.app/api/jobs').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
  
         <form className="flex text-black justify-center" action="#">
          <label form="lang">Filtrar por puesto </label>
          <select >
          {data.map((item, index) => (
                  <option key={index}>
                    {item.title}
                  </option>
                ))}
          </select>
        </form>
  );
}