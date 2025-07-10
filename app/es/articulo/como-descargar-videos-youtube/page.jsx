import Link from "next/link";
import { DownloadIcon, YoutubeIcon, SmartphoneIcon } from "lucide-react";

export const metadata = {
  title: "📥 Cómo Descargar Videos de YouTube Gratis – MP4 o MP3 Rápido y Sin Apps | SaveClipt",
  description:
    "Aprendé paso a paso cómo descargar videos de YouTube en MP4 o MP3 sin instalar nada. 100% gratis, sin marcas de agua, compatible con PC, Android y iPhone. Usá SaveClipt ahora.",
  alternates: {
    canonical: "https://saveclipt.com/es/articulo/como-descargar-videos-youtube",
  },
};


export default function ComoDescargarYouTube() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          Cómo descargar videos de YouTube gratis en 2025
        </h1>
        <p className="text-lg text-gray-600">
          Guía paso a paso para convertir YouTube a MP4 o MP3 con <strong>SaveClipt</strong>.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">¿Por qué descargar videos de YouTube?</h2>
        <p>
          Descargar videos de YouTube es útil para ver contenido sin conexión, evitar anuncios, guardar clases o tutoriales, o conservar material que puede ser eliminado de la plataforma. Con <strong>SaveClipt</strong> podés hacerlo de forma gratuita, rápida y desde cualquier dispositivo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">¿Qué es SaveClipt?</h2>
        <div className="flex items-center gap-3 mb-2">
          <YoutubeIcon className="w-6 h-6 text-red-500" />
          <p>
            SaveClipt es un convertidor online para descargar videos o audios desde YouTube sin instalar aplicaciones.
          </p>
        </div>
        <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
          <li>Funciona en PC, Android y iPhone.</li>
          <li>Convierte a MP4 (video) o MP3 (audio).</li>
          <li>No requiere registro ni pago.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Cómo descargar un video paso a paso</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Copiá la URL del video que querés bajar desde YouTube.</li>
          <li>
            Pegala en la barra de búsqueda de{" "}
            <Link href="/es" className="text-blue-600 underline">
              SaveClipt
            </Link>
            .
          </li>
          <li>Hacé clic en <strong>“Buscar video”</strong>.</li>
          <li>Esperá unos segundos hasta que se genere la vista previa.</li>
          <li>Seleccioná el formato deseado (MP4 o MP3) y hacé clic en <strong>“Descargar”</strong>.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">¿Funciona en celular?</h2>
        <div className="flex items-center gap-3">
          <SmartphoneIcon className="w-6 h-6 text-green-600" />
          <p>
            Sí. Podés usar SaveClipt desde Android o iOS sin problemas. Solo abrí el sitio desde tu navegador móvil.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">¿Es legal descargar videos de YouTube?</h2>
        <p>
          Descargar contenido puede estar sujeto a derechos de autor. SaveClipt no almacena archivos ni fomenta la piratería. Asegurate de usarlo solo con videos de libre distribución o de uso personal.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Tips para mejorar tu experiencia</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
          <li>No cierres la pestaña durante la carga.</li>
          <li>Probá MP4 si MP3 falla (y viceversa).</li>
          <li>Evitá usar bloqueadores de anuncios para asegurar la descarga.</li>
          <li>Copiá la URL directamente desde el botón “Compartir” de YouTube.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Preguntas frecuentes</h2>
        <div className="space-y-3">
          <p>
            <strong>¿Puedo descargar Shorts?</strong> Sí, SaveClipt es compatible con <b>YouTube Shorts</b>.
          </p>
          <p>
            <strong>¿Funciona con listas de reproducción?</strong> Por ahora no. Solo videos individuales.
          </p>
          <p>
            <strong>¿Se guarda con calidad HD?</strong> Sí, podés elegir calidad hasta 1080p si está disponible.
          </p>
        </div>
      </section>

      <footer className="text-center mt-12">
        <Link
          href="/es"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-lg transition"
        >
          <DownloadIcon className="w-5 h-5" />
          Ir al convertidor YouTube
        </Link>
      </footer>
    </article>
  );
}
