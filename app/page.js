

export const metadata = {
  title: 'SaveClipt – Convertidor y Descargador de Videos YouTube en MP4 y MP3',
  description:
    'Bienvenido a SaveClipt. Descarga videos de YouTube en MP4 HD o MP3 320kbps. Rápido, gratis, sin apps y compatible con todos los dispositivos.',
  alternates: {
    canonical: 'https://saveclipt.com/',
    languages: {
      es: 'https://saveclipt.com/es',
      en: 'https://saveclipt.com/en',
    },
  },
  openGraph: {
    title: 'SaveClipt – Descarga videos de YouTube en MP4 o MP3',
    description:
      'Convertí y descargá cualquier video de YouTube gratis. SaveClipt funciona sin registro, sin apps y en todos los dispositivos.',
    url: 'https://saveclipt.com',
    type: 'website',
    images: ['https://saveclipt.com/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaveClipt – Descarga YouTube MP4 / MP3',
    description:
      'Convertí videos de YouTube a MP4 o MP3 gratis. Funciona en PC, iPhone, Android y navegadores. ¡Sin apps, sin límites!',
    images: ['https://saveclipt.com/favicon.png'],
  },
}




export default function Home() {
  return (
<main
  className="relative min-h-screen flex flex-col items-center justify-center text-center gap-6 p-8 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/bg-saveclipt.png')" }}
>
  {/* Fondo oscuro semitransparente para contraste */}
  <div className="absolute inset-0 bg-black/40 z-0" />

  {/* Contenido principal */}
  <div className="relative z-10 w-full max-w-2xl">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md leading-tight">
      🌍 Welcome to <span className="text-yellow-300">SaveClipt</span>
    </h1>
    <p className="text-white/90 text-base sm:text-lg mt-2 px-2">
      Download YouTube videos in <strong>MP4 HD</strong> or <strong>MP3 320kbps</strong> – 100% free, no apps, no registration. Compatible with Android, iPhone, PC and all browsers.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-8">
      <a
        href="/es"
        className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold text-base sm:text-lg transition-transform hover:scale-105"
      >
        Español
      </a>
      <a
        href="/en"
        className="text-white bg-neutral-800 hover:bg-neutral-900 px-6 py-3 rounded-full font-semibold text-base sm:text-lg transition-transform hover:scale-105"
      >
        English
      </a>
    </div>
  </div>
</main>

  )
}
