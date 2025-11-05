"use client"
import Link from "next/link";
import { useEffect, useState } from 'react'



//https://github.com/santiskrr/portfolio/blob/main/app/components/LinkPreview.tsx
export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {

const axios = require('axios');

async function getUser() {
  
  try {
    const response = await axios.get('https://bolsa-de-empleo-cfp.vercel.app/api/applicants');
    console.log(response);
    const jsonData = await response.json();

setData (jsonData.results);
  } catch (error) {
    console.error(error);
  }
  }

getUser ();
}, []);

  return (
    <div className="flex justify-between">
   
<h1> {data} </h1>
   </div>
  );
}
