import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between">
      pagina principal
      FELIZ LUNES
    <Link href="/tami">ir a ver a tami</Link>
   </div>
  );
}
