
import { Download, PlayCircle } from 'lucide-react'
import Simulador from "@/components/Simulador";
import Image from 'next/image'

export const metadata =  {
  title: 'Descargar videos de YouTube en MP4 o MP3 gratis | SaveClipt',
  description:
    'Convierte y descarga videos de YouTube en formato MP4 o MP3 con SaveClipt. Rápido, gratuito, sin registro, y compatible con todos los dispositivos.',
  keywords:
    'descargar videos de YouTube, convertir YouTube a MP3, descargador YouTube MP4, YouTube MP3 alta calidad, SaveClipt, herramienta para descargar YouTube, convertidor YouTube en línea, videos HD sin marca de agua',
  alternates: {
    canonical: 'https://saveclipt.com/es/',
    languages: {
      en: 'https://saveclipt.com/en/',
    },
  },
  openGraph: {
    title: 'Descargar videos de YouTube – MP4 o MP3 gratis | SaveClipt',
    description:
      'Convierte cualquier video de YouTube a MP4 o MP3 al instante con SaveClipt. Gratis, rápido y sin necesidad de instalar nada.',
    url: 'https://saveclipt.com/es/',
    type: 'website',
    images: ['https://saveclipt.com/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Descargar videos de YouTube – MP4 y MP3 gratis | SaveClipt',
    description:
      'Descarga fácilmente videos de YouTube o conviértelos a MP3 con SaveClipt. Rápido, gratuito, y funciona en cualquier dispositivo. Sin registro.',
    images: ['https://saveclipt.com/favicon.png'],
  },
}

export default function HomePageES() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-14 text-gray-800">
<section className="text-center mb-16">
  <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
    🎮 Descargar videos de YouTube en MP4 o MP3 gratis sin programas
  </h1>
  
  <p className="text-lg text-gray-600 mb-2">
    Con <strong>SaveClipt</strong>, puedes <strong>descargar cualquier video de YouTube</strong> de forma
    rápida y sencilla. Convierte videos a <em>MP4 en alta definición</em> o extrae solo el <em>audio en MP3</em>,
    sin necesidad de instalar programas ni registrarte.
  </p>

  <p className="text-gray-600 mb-2">
    Elige entre <strong>360p, 720p, 1080p o calidad 4K</strong>. También puedes convertir videos a <strong>MP3 hasta 320kbps</strong>
    para escuchar música en cualquier dispositivo.
  </p>

  <p className="text-gray-600 mb-2">
    Compatible con <strong>Android</strong>, <strong>iPhone</strong>, <strong>Windows</strong>, <strong>Mac</strong> y todos los navegadores modernos. 
    Funciona en móviles, tablets y PC sin restricciones.
  </p>

  <p className="text-gray-600 mb-2">
    SaveClipt es el <strong>mejor convertidor YouTube MP4 online</strong> del 2025, ideal para quienes buscan una herramienta confiable para
    <em>descargar videos largos, cortos, documentales o música de YouTube</em> sin marca de agua.
  </p>

  <p className="text-gray-600">
    Prueba ahora nuestro <strong>descargador gratuito de YouTube</strong> y convierte contenido en segundos. 
    ¡100% gratis, sin límites y sin software!
  </p>

  <div className="mt-10">
    <Simulador />
  </div>
</section>


<section className="flex flex-col items-center mb-16">
  <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
    🎬 Ejemplos de videos populares que puedes descargar con SaveClipt
  </h2>
  <p className="text-center text-gray-600 max-w-2xl mb-8">
    Aquí tienes algunas miniaturas de videos reales disponibles en YouTube que puedes descargar en <strong>MP4 (hasta 4K)</strong> 
    o convertir a <strong>MP3 en alta calidad</strong> usando nuestra herramienta. Compatible con móviles, tablets y PC.
  </p>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      'ysz5S6PUM-U',
      'dQw4w9WgXcQ',
      '3JZ_D3ELwOQ',
    ].map((id) => (
      <div key={id} className="rounded-lg overflow-hidden shadow-lg max-w-xs">
<Image
  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
  alt={`Miniatura del video ${id}`}
  title="Haz clic para previsualizar"
  aria-label={`Video de YouTube ${id}`}
  width={480} // puedes ajustarlo según el tamaño real que uses
  height={360}
  className="w-full h-auto"
/>
        <p className="text-sm text-center mt-2 text-gray-600">
          Convertir a <strong>MP4 HD</strong> o <strong>MP3 320kbps</strong> en segundos.
        </p>
      </div>
    ))}
  </div>
</section>

<section id="como-descargar" className="bg-gray-50 rounded-xl p-8 mb-16 shadow-sm">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
    <Download className="w-6 h-6 text-blue-600" />
    Guía paso a paso para descargar videos de YouTube en MP4 o MP3 (sin instalar apps)
  </h2>

  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
    Aprende cómo usar <strong>SaveClipt</strong> para descargar videos de YouTube en formato <strong>MP4 de alta calidad</strong> 
    o extraer el audio en <strong>MP3 320kbps</strong>. Compatible con PC, Android, iPhone y navegadores como Chrome, Firefox y Safari. 
    Sin necesidad de programas, extensiones ni registros.
  </p>

  <ol className="list-decimal list-inside text-gray-700 space-y-3">
    <li>
      <strong>Copia el enlace del video:</strong> ve a YouTube y copia la URL del video que deseas descargar, ya sea en tu navegador o desde la app oficial.
    </li>
    <li>
      <strong>Pega el enlace en SaveClipt:</strong> vuelve a esta página, pega la URL en el campo indicado y haz clic en <em>&quot;Buscar video&quot;</em>.
    </li>
    <li>
      <strong>Selecciona el formato de descarga:</strong> elige entre <strong>MP4 (360p, 720p, 1080p o 4K)</strong> para video o <strong>MP3 hasta 320kbps</strong> para solo audio.
    </li>
    <li>
      <strong>Haz clic en &quot;Descargar&quot;:</strong> el archivo comenzará a generarse y podrás guardarlo en tu dispositivo en cuestión de segundos.
    </li>
  </ol>

  <p className="mt-6 text-sm text-gray-500 italic">
    Este proceso funciona en cualquier dispositivo y navegador. Con SaveClipt puedes <strong>convertir videos de YouTube a MP3 o MP4</strong> sin límites ni registros.
  </p>
</section>


     <section id="caracteristicas" className="mb-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
    <PlayCircle className="w-6 h-6 text-green-600" />
    Funciones destacadas del convertidor de videos YouTube SaveClipt
  </h2>

  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
    SaveClipt es más que un simple convertidor de YouTube. Es una herramienta potente y segura para descargar contenido audiovisual 
    desde YouTube y convertirlo en archivos <strong>MP4 HD sin marca de agua</strong> o <strong>MP3 de alta calidad (hasta 320kbps)</strong>. 
    Compatible con todos los dispositivos y sin necesidad de descargar aplicaciones.
  </p>

  <div className="grid sm:grid-cols-2 gap-6">
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow">
      <h3 className="font-bold text-gray-900 mb-2">🎥 Descarga en MP4 o MP3</h3>
      <p>
        Con SaveClipt puedes convertir cualquier video de YouTube a <strong>formato MP4</strong> (360p, 720p, 1080p o incluso 4K) 
        o extraer solo el <strong>audio en MP3</strong> con calidad profesional. Perfecto para guardar música, tutoriales o clases online.
      </p>
    </div>

    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow">
      <h3 className="font-bold text-gray-900 mb-2">🔊 Calidad MP3 a 320kbps</h3>
      <p>
        Obtén archivos MP3 con la mejor calidad disponible: hasta <strong>320kbps</strong>. Ideal para escuchar música sin pérdida de calidad en cualquier reproductor o dispositivo móvil.
      </p>
    </div>

    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow">
      <h3 className="font-bold text-gray-900 mb-2">📱 Compatible con todos los dispositivos</h3>
      <p>
        Funciona en <strong>Android, iPhone, Windows, macOS, iPad</strong> y cualquier navegador (Chrome, Firefox, Edge, Safari). 
        No necesitas instalar apps ni extensiones.
      </p>
    </div>

    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow">
      <h3 className="font-bold text-gray-900 mb-2">💯 100% gratis y sin límites</h3>
      <p>
        Sin registro, sin publicidad invasiva, sin límites de descargas. SaveClipt es una <strong>plataforma gratuita</strong> para convertir y descargar 
        videos de YouTube de forma segura, rápida y sin interrupciones.
      </p>
    </div>
  </div>

  <p className="mt-6 text-sm text-gray-500 italic">
    Miles de usuarios ya usan SaveClipt para descargar sus videos favoritos. Úsalo hoy para convertir YouTube a MP4 o MP3 sin restricciones.
  </p>
</section>

  <section id="palabras-clave" className="mb-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">
    🔎 Palabras clave por las que SaveClipt destaca en Google
  </h2>

  <p className="text-gray-600 text-sm mb-4">
    Estas son algunas de las <strong>consultas más buscadas</strong> en Google relacionadas con la descarga de videos de YouTube. 
    SaveClipt ha sido optimizado para aparecer en los primeros resultados gracias a su rendimiento, usabilidad y velocidad.
  </p>

  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
    <li>
      <strong>Descargar video de YouTube sin programas</strong>: obtén cualquier video directamente desde tu navegador sin necesidad de instalar software.
    </li>
    <li>
      <strong>Convertidor YouTube a MP3 320kbps</strong>: transforma videos en archivos MP3 con calidad profesional en cuestión de segundos.
    </li>
    <li>
      <strong>Descargador de YouTube para PC y móvil</strong>: compatible con Windows, Android, iPhone, iPad y tablets. Sin límite de uso.
    </li>
    <li>
      <strong>Convertir YouTube a MP4 online gratis</strong>: selecciona la calidad (360p, 720p, 1080p, 4K) y descarga al instante sin registros.
    </li>
    <li>
      <strong>Descargar videos largos de YouTube en HD</strong>: ideal para películas, entrevistas, tutoriales extensos y clases virtuales en alta definición.
    </li>
  </ul>

  <p className="mt-6 text-sm text-gray-500 italic">
    Estas keywords forman parte de nuestra estrategia de SEO para posicionar SaveClipt como el mejor convertidor gratuito de YouTube en español.
  </p>
</section>


  <section id="aviso-legal" className="text-sm text-gray-500 border-t pt-6 mt-16">
  <h2 className="text-base font-semibold text-gray-700 mb-2">
    ⚖️ Aviso legal y política de uso responsable
  </h2>
  <p className="mb-2">
    <strong>SaveClipt</strong> es una plataforma independiente que no está afiliada, patrocinada ni respaldada por <strong>YouTube™, Google LLC</strong> ni por ninguna entidad relacionada.
  </p>
  <p className="mb-2">
    Esta herramienta fue diseñada con fines educativos, personales y de investigación. El uso de SaveClipt debe respetar las leyes de <strong>derechos de autor (copyright)</strong> y las políticas de contenido de las plataformas desde las cuales se extrae el material.
  </p>
  <p className="mb-2">
    El usuario asume toda responsabilidad sobre los contenidos descargados mediante esta aplicación. Recomendamos verificar si el video tiene licencia de uso libre o si cuentas con autorización del autor.
  </p>
  <p>
    Cualquier infracción al uso correcto de esta herramienta está fuera del alcance y responsabilidad de SaveClipt. Reiteramos nuestro compromiso con la legalidad, privacidad y transparencia en cada descarga realizada.
  </p>
</section>

    </main>
  )
}
