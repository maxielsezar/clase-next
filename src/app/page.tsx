"use client"
import Link from "next/link";
import { useEffect, useState } from 'react'


//https://github.com/santiskrr/portfolio/blob/main/app/components/LinkPreview.tsx
export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {

const fetchData = async () => {

try {

const response = await fetch (`https://thesimpsonsapi.com/api/characters?page=${pagina}`);
const jsonData = await response.json();
setData (jsonData.results);

}  

catch (error) {

  console.log("Error fetching data:", error);

};
}
)
fetchData();


  return (
    <div className="flex justify-between">
   
<h1> {data} </h1>
   </div>
  );
}
