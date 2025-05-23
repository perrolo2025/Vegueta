import { Metadata } from 'next'

export const metadata= {
  title: 'Guía completa para descargar videos de YouTube en MP4 y MP3 con SaveClipt',
  description:
    'Aprende cómo descargar videos de YouTube gratis en MP4 o MP3 usando SaveClipt. Guía paso a paso compatible con PC, Android, iPhone y cualquier navegador.',
  keywords: [
    'guía descargar videos YouTube',
    'como usar SaveClipt',
    'convertir YouTube a MP3',
    'descargar YouTube MP4 1080p',
    'descargar videos sin programas',
    'descargador YouTube gratuito',
    'YouTube downloader paso a paso',
  ],
  alternates: {
    canonical: 'https://saveclipt.com/es/guia',
    languages: {
      en: 'https://saveclipt.com/en/guide',
    },
  },
  openGraph: {
    title: 'Guía para descargar videos de YouTube gratis | SaveClipt',
    description:
      '¿Quieres descargar videos de YouTube en MP4 o MP3? Esta guía paso a paso te muestra cómo hacerlo fácilmente con SaveClipt desde cualquier dispositivo.',
    url: 'https://saveclipt.com/es/guia',
    type: 'article',
    images: ['https://saveclipt.com/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía: Cómo descargar videos de YouTube con SaveClipt',
    description:
      'Descubre cómo descargar videos de YouTube paso a paso con SaveClipt. MP4, MP3, sin apps, sin registro, 100% gratis.',
    images: ['https://saveclipt.com/favicon.png'],
  },
}

export default function GuiaES() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Guía paso a paso para descargar videos de YouTube con SaveClipt
      </h1>

      <p className="text-gray-700 mb-8">
        Esta guía práctica te enseña cómo <strong>descargar videos de YouTube gratis</strong> en
        formato <strong>MP4 o MP3</strong> usando <strong>SaveClipt</strong>, sin instalar
        programas ni registrarte. Es compatible con todos los dispositivos: <em>PC, Android,
        iPhone, tablet</em> o cualquier navegador.
      </p>

      <ol className="list-decimal list-inside text-gray-800 space-y-4 text-base">
        <li>
          <strong>Copia el enlace del video de YouTube:</strong> desde tu navegador o la app oficial.
        </li>
        <li>
          <strong>Ingresá a SaveClipt.com:</strong> nuestro convertidor de YouTube seguro y gratuito.
        </li>
        <li>
          <strong>Pegá el enlace en el campo de búsqueda:</strong> y hacé clic en <em>Descargar ahora</em>.
        </li>
        <li>
          <strong>Seleccioná el formato:</strong> MP4 para video (con resoluciones 360p, 720p, 1080p, 4K)
          o MP3 para audio (hasta 320kbps).
        </li>
        <li>
          <strong>Hacé clic en &quot;Descargar&quot;:</strong> luego de la simulación, aparecerá el botón
          final de descarga.
        </li>
      </ol>

      <p className="mt-8 text-gray-700">
        Con <strong>SaveClipt</strong> podés <strong>bajar videos educativos</strong>, música,
        tutoriales, entrevistas, podcasts o cualquier contenido visual de YouTube con un solo clic.
        No necesitas instalar ninguna app, ni extensiones del navegador. Es rápido, ilimitado,
        gratuito y <strong>sin marcas de agua</strong>.
      </p>

      <p className="mt-4 text-gray-600 text-sm">
        Si buscás un <strong>convertidor de YouTube confiable</strong>, esta es la herramienta
        ideal. Simple, intuitiva y segura.
      </p>
    </main>
  )
}
