"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

//https://bolsa-de-empleo-cfp.vercel.app/api/jobs
//https://bolsa-de-empleo-cfp.vercel.app/api/companies
//https://bolsa-de-empleo-cfp.vercel.app/api/applicants

export default function Home() {

  async function getUser() {
  try {
    
    const axios = require('axios');
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
  return (
    <div className="flex justify-between">

      
   
    <Link href="/gabi">Ir a ver gabi</Link>
   </div>
  );
}
