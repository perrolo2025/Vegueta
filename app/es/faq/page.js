export const metadata = {
  title: '❓ Cómo Descargar Videos de YouTube GRATIS – MP4 y MP3 Rápido | FAQ SaveClipt',
  description:
    '¿Dudas sobre SaveClipt? Aquí te explicamos cómo descargar videos y Shorts de YouTube en MP4 o MP3 sin apps, sin marcas de agua y totalmente gratis. Guía rápida y segura.',
  keywords: [
    'descargar videos YouTube gratis',
    'convertir YouTube a MP3',
    'YouTube MP3 320kbps sin apps',
    'FAQ SaveClipt',
    'descargar Shorts YouTube rápido',
    'convertidor MP4 HD YouTube',
    'preguntas frecuentes SaveClipt',
  ],
  alternates: {
    canonical: 'https://saveclipt.com/es/faq',
    languages: {
      en: 'https://saveclipt.com/en/faq',
    },
  },
  openGraph: {
    title: '❓ Preguntas Frecuentes SaveClipt – Descargar YouTube MP4 y MP3 Gratis',
    description:
      'Resuelve todas tus dudas sobre cómo usar SaveClipt para bajar videos de YouTube gratis, sin registro ni apps. Rápido, seguro y sin marcas de agua.',
    url: 'https://saveclipt.com/es/faq',
    type: 'website',
    images: ['https://saveclipt.com/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '❓ SaveClipt FAQ – Descargar YouTube Gratis MP4 y MP3 Rápido y Fácil',
    description:
      'Aprende a usar SaveClipt para bajar videos y Shorts de YouTube sin apps, sin registro y sin marcas de agua. Rápido, gratuito y compatible con todos los dispositivos.',
    images: ['https://saveclipt.com/favicon.png'],
  },
}

export default function FAQPageES() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Es legal descargar videos de YouTube?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, siempre que sea para uso personal. Compartirlos o usarlos con fines comerciales puede infringir derechos de autor.',
        },
      },
      {
        '@type': 'Question',
        name: '¿En qué formatos y calidades puedo descargar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Podés descargar videos en formato MP4 (360p, 720p, 1080p, 4K) o extraer el audio en MP3 hasta 320kbps.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo descargar Shorts de YouTube?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. SaveClipt permite descargar Shorts igual que cualquier otro video, en MP4 o MP3.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Funciona SaveClipt en todos los dispositivos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Es compatible con Windows, macOS, Android, iPhone, Linux y todos los navegadores modernos. No necesitas instalar nada.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Por qué a veces falla una descarga?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puede deberse a enlaces inválidos, videos privados, restricciones regionales o errores temporales. Verificá el enlace e intentá nuevamente.',
        },
      },
      {
        '@type': 'Question',
        name: '¿SaveClipt es realmente gratis y seguro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Es 100% gratis, no requiere registro y no rastrea ni guarda tus datos. Tus descargas son privadas y anónimas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo descargar varios videos a la vez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Actualmente, solo se permite una descarga a la vez para mantener la velocidad y calidad. Estamos trabajando en la opción de descarga por lotes.',
        },
      },
    ],
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Preguntas frecuentes sobre SaveClipt
      </h1>
      <p className="text-gray-700 text-base mb-10">
        A continuación respondemos las dudas más comunes sobre el uso de{' '}
        <strong>SaveClipt</strong>, el mejor descargador de videos de YouTube en formatos MP4 y
        MP3. Aprende cómo convertir videos, descargar Shorts, solucionar errores y entender por qué
        esta herramienta es 100% segura y gratuita.
      </p>

      <dl className="text-gray-800">
        {[
          {
            q: '¿Es legal descargar videos de YouTube?',
            a: 'Sí, mientras sea para uso personal. El uso comercial sin autorización puede violar derechos de autor.',
          },
          {
            q: '¿En qué formatos y calidades puedo descargar?',
            a: 'SaveClipt permite descargar en MP4 (360p, 720p, 1080p, 4K) y también convertir el video a audio MP3 de hasta 320kbps.',
          },
          {
            q: '¿Puedo descargar Shorts de YouTube?',
            a: 'Claro que sí. Podés descargar Shorts como cualquier video normal usando SaveClipt.',
          },
          {
            q: '¿Funciona SaveClipt en todos los dispositivos?',
            a: 'Sí. Es compatible con Windows, Mac, iPhone, Android y cualquier navegador. No necesitás instalar nada.',
          },
          {
            q: '¿Por qué a veces falla una descarga?',
            a: 'Los errores más comunes son enlaces inválidos, videos privados, restricciones de país o errores temporales. Verificá el enlace y probá de nuevo.',
          },
          {
            q: '¿SaveClipt es realmente gratis y seguro?',
            a: '100%. No requiere registro, no almacena datos, y todas las descargas son privadas y anónimas.',
          },
          {
            q: '¿Puedo descargar varios videos a la vez?',
            a: 'De momento, se permite solo una descarga por vez para mantener estabilidad. En el futuro se podrá usar descarga múltiple.',
          },
        ].map((item, i) => (
          <div className="mb-6" key={i}>
            <dt className="font-semibold text-lg">{item.q}</dt>
            <dd className="text-gray-700 mt-1">{item.a}</dd>
          </div>
        ))}
      </dl>

      {/* JSON-LD schema para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mt-10 flex justify-center">
  <a
    href="https://saveclipt.com/es"
    className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg shadow hover:opacity-90 transition"
    style={{ backgroundColor: '#ff0000' }} // Rojo del logo SaveClipt
  >
    Seguir descargando más videos
  </a>
</div>


    </main>
  )
}
