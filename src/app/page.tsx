"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

//https://github.com/santiskrr/portfolio/blob/main/app/components/LinkPreview.tsx
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
