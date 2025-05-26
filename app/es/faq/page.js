export const metadata = {
  title: 'Descargar Videos de YouTube GRATIS y Rápido en MP4 y MP3 – FAQ SaveClipt',
  description:
    'Aprende cómo descargar videos de YouTube gratis en MP4 y MP3 con SaveClipt. Rápido, sin marcas de agua, sin registro y 100% seguro. Descubre cómo funciona y resuelve tus dudas.',
  keywords: [
    'descargar videos YouTube gratis',
    'convertir YouTube a MP3',
    'YouTube MP3 320kbps gratis',
    'SaveClipt preguntas frecuentes',
    'descargar Shorts YouTube rápido',
    'convertidor YouTube a MP4 HD',
    'tutorial SaveClipt seguro',
  ],
  alternates: {
    canonical: 'https://saveclipt.com/es/faq',
    languages: {
      en: 'https://saveclipt.com/en/faq',
    },
  },
  openGraph: {
    title: 'Descargar YouTube GRATIS y Rápido – MP4 y MP3 | FAQ SaveClipt',
    description:
      'Resuelve todas tus dudas sobre SaveClipt, el convertidor más rápido y seguro para descargar videos y Shorts de YouTube en MP4 o MP3. Descubre cómo funciona aquí.',
    url: 'https://saveclipt.com/es/faq',
    type: 'website',
    images: ['https://saveclipt.com/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Descargar YouTube GRATIS y Rápido – MP4 y MP3 | FAQ SaveClipt',
    description:
      'Resuelve tus dudas sobre cómo usar SaveClipt para descargar videos y Shorts de YouTube gratis, sin apps, sin marcas de agua, y en segundos.',
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
    </main>
  )
}
