import Link from "next/link";

//https://github.com/santiskrr/portfolio/blob/main/app/components/LinkPreview.tsx
export default function Home() {
  return (
    <div className="flex justify-between">
      pagina principal
      FELIZ LUNES
    <Link href="/tami">ir a ver a tami</Link>
   </div>
  );
}
