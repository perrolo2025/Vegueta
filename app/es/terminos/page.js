export const metadata = {
  title: 'Términos y Condiciones de Uso | SaveClipt',
  description:
    'Consulta los términos de uso de SaveClipt. Entendé cómo usar nuestra herramienta de forma responsable, segura y dentro del marco legal.',
  alternates: {
    canonical: 'https://saveclipt.com/es/terminos', // sin slash final, consistente con lo indexado
    languages: {
      en: 'https://saveclipt.com/en/terms',
    },
  },
}

export default function TerminosES() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Uso aceptado</h2>
        <p className="text-gray-700">
          Al utilizar SaveClipt, aceptas que esta es una herramienta de simulación para fines exclusivamente educativos, personales y de investigación. SaveClipt no facilita descargas reales ni promueve el uso no autorizado de contenidos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Propiedad intelectual</h2>
        <p className="text-gray-700">
          SaveClipt no almacena, aloja ni distribuye videos. Todos los derechos pertenecen a sus respectivos propietarios (YouTube, Google LLC y creadores). Es responsabilidad del usuario respetar las leyes de derechos de autor y las políticas de las plataformas de origen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Responsabilidad</h2>
        <p className="text-gray-700">
          El uso de SaveClipt es bajo tu propio riesgo. Esta herramienta es una demostración técnica y cualquier intento de usarla para finalidades distintas a las educativas será bajo tu exclusiva responsabilidad. SaveClipt no se hace responsable por infracciones legales, daños o reclamaciones de terceros.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Modificaciones</h2>
        <p className="text-gray-700">
          Estos términos y condiciones pueden actualizarse sin previo aviso. Te recomendamos revisarlos periódicamente para mantenerte informado sobre posibles cambios.
        </p>
      </section>
    </main>
  )
}
