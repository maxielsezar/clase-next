
import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react' 
import Empleo from '../models/jobs'



export default function Main() {

  const [data,setData]=useState<Empleo[]>([])
  const [selectedValue, setSelectedValue] = useState('');
      
 useEffect(() => {
    axios.get('https://bolsa-de-empleo-cfp.vercel.app/api/jobs').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
  <>
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

          </>

  );
}

