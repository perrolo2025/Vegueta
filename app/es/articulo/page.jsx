import Link from "next/link";
import { ChevronRight } from "lucide-react";


export const metadata = {
  title: "Artículos para descargar videos de YouTube y convertir a MP3 | SaveClipt 2025",
  description:
    "Explorá nuestras guías paso a paso para descargar videos de YouTube gratis, convertir videos a MP3, y usar SaveClipt en PC y celular. Actualizado 2025.",
  alternates: {
    canonical: "https://saveclipt.com/es/articulo",
  },
};


const articulos = [
  {
    title: "Cómo descargar videos de YouTube gratis en 2025",
    href: "/es/articulo/como-descargar-videos-youtube",
    description: "Tutorial paso a paso para bajar videos de YouTube sin instalar programas.",
  },
  {
    title: "Convertir YouTube a MP3 gratis en 2025",
    href: "/es/articulo/youtube-a-mp3-gratis",
    description: "Extraé el audio de cualquier video de YouTube y guardalo como archivo MP3.",
  },
  // Podés agregar más artículos fácilmente acá
];

export default function ListaDeArticulos() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Todos los artículos</h1>
      <ul className="space-y-6">
        {articulos.map(({ title, href, description }) => (
          <li key={href} className="bg-white border rounded-xl p-5 shadow hover:shadow-md transition">
            <Link href={href} className="group block">
              <h2 className="text-xl font-semibold text-blue-600 group-hover:underline flex items-center gap-2">
                {title}
                <ChevronRight className="w-4 h-4" />
              </h2>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
