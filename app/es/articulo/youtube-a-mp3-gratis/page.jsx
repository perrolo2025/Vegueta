import Link from "next/link";
import { MusicIcon, YoutubeIcon, DownloadIcon } from "lucide-react";

export const metadata = {
  title: "🎧 Convertir YouTube a MP3 Gratis – Rápido y Sin Instalar | SaveClipt",
  description:
    "Extraé el audio de cualquier video de YouTube en segundos y convertí a MP3 gratis. Sin programas, sin registro y sin marcas de agua. Funciona en PC, Android y iPhone.",
  alternates: {
    canonical: "https://saveclipt.com/es/articulo/youtube-a-mp3-gratis",
  },
};


export default function YoutubeMp3GratisPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          Convertir YouTube a MP3 gratis en 2025
        </h1>
        <p className="text-lg text-gray-600">
          Extraé el audio de tus videos favoritos con SaveClipt, rápido y sin instalar nada.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">¿Qué es un convertidor YouTube a MP3?</h2>
        <div className="flex items-center gap-3 mb-2">
          <MusicIcon className="w-6 h-6 text-green-600" />
          <p>
            Es una herramienta que transforma videos de YouTube en archivos de audio MP3 para escucharlos offline.
          </p>
        </div>
        <p className="mt-2">
          <strong>SaveClipt</strong> te permite hacerlo online, sin registro, y desde cualquier dispositivo. Ideal para música, podcasts, entrevistas, clases o audiolibros.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ventajas de convertir YouTube a MP3</h2>
        <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
          <li>Reducís el uso de datos móviles.</li>
          <li>Escuchás sin interrupciones ni anuncios.</li>
          <li>Podés armar tu colección de audio offline.</li>
          <li>Ideal para escuchar mientras hacés otras tareas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Cómo usar SaveClipt para convertir a MP3</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Copiá el enlace del video de YouTube que querés convertir.</li>
          <li>
            Pegalo en la barra de{" "}
            <Link href="/es" className="text-blue-600 underline">
              SaveClipt
            </Link>.
          </li>
          <li>Hacé clic en <strong>“Buscar video”</strong>.</li>
          <li>Esperá unos segundos a que se genere la vista previa.</li>
          <li>Elegí <strong>MP3 (solo audio)</strong> y hacé clic en <strong>“Descargar”</strong>.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">¿Es compatible con celular?</h2>
        <p>
          ¡Sí! SaveClipt funciona perfectamente en dispositivos móviles Android e iOS. Solo necesitás el navegador.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">¿Es legal convertir videos de YouTube?</h2>
        <p>
          Depende del uso que le des. Convertir videos a MP3 para uso personal y sin fines comerciales es generalmente aceptado. Recordá que <strong>SaveClipt</strong> no almacena contenido ni fomenta la descarga de material protegido.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Preguntas frecuentes</h2>
        <p className="mb-2">
          <strong>¿Funciona con Shorts?</strong> Sí, también podés convertir Shorts de YouTube a MP3.
        </p>
        <p className="mb-2">
          <strong>¿Puedo convertir listas completas?</strong> No por ahora, pero podés hacerlo video por video.
        </p>
        <p className="mb-2">
          <strong>¿Qué calidad de audio se descarga?</strong> SaveClipt entrega audio en calidad aceptable para la mayoría de los dispositivos.
        </p>
      </section>

      <footer className="text-center mt-12">
        <Link
          href="/es"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full text-lg transition"
        >
          <DownloadIcon className="w-5 h-5" />
          Convertir video ahora
        </Link>
      </footer>
    </article>
  );
}
