export const metadata = {
  title: 'Política de Privacidad | SaveClipt',
  description:
    'Lee la política de privacidad de SaveClipt. Protegemos tu información personal. No rastreamos, no almacenamos datos, y no pedimos registro.',
  alternates: {
    canonical: 'https://saveclipt.com/es/politica', // sin slash final, consistente con lo indexado
    languages: {
      en: 'https://saveclipt.com/en/privacy',
    },
  },
}


export default function PoliticaPrivacidadES() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introducción</h2>
        <p className="text-gray-700">
          En SaveClipt, respetamos tu privacidad. Esta política explica qué datos recopilamos (ninguno), cómo protegemos tu información (no la almacenamos) y cómo usás nuestro sitio, que es un simulador educativo e informativo, de forma segura y anónima.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. No recolectamos datos personales</h2>
        <p className="text-gray-700">
          SaveClipt no solicita nombre, correo electrónico ni ningún dato personal. No pedimos registro ni almacenamos cookies identificables. Esta herramienta no descarga ni almacena contenido real.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Herramientas de terceros</h2>
        <p className="text-gray-700">
          Podemos usar servicios publicitarios (como Monetag o Google AdSense) que podrían usar cookies para mostrar anuncios relevantes. No compartimos tu información con ellos ni recopilamos datos personales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Seguridad</h2>
        <p className="text-gray-700">
          Nuestro sitio opera bajo HTTPS para proteger tu navegación. No realizamos almacenamiento de enlaces, historial ni contenido descargado, ya que es un simulador de descarga.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Cambios a esta política</h2>
        <p className="text-gray-700">
          Podemos actualizar esta política ocasionalmente. Si tenés preguntas, podés contactarnos a través de nuestros canales oficiales.
        </p>
      </section>
    </main>
  )
}

