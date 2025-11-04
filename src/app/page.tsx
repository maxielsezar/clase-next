import Link from "next/link";

//https://bolsa-de-empleo-cfp.vercel.app/api/jobs
//https://bolsa-de-empleo-cfp.vercel.app/api/companies
//https://bolsa-de-empleo-cfp.vercel.app/api/applicants

export default function Home() {
  return (
    <div className="flex justify-between">
      pagina principal
    <Link href="/tami">ir a ver a tami</Link>
   </div>
  );
}
