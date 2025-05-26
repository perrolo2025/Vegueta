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
          Al usar SaveClipt, aceptás que solo lo harás con fines personales y no comerciales. No
          podés usar el servicio para violar derechos de autor ni distribuir contenido descargado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Propiedad intelectual</h2>
        <p className="text-gray-700">
          SaveClipt no almacena ni aloja videos. Todos los derechos pertenecen a sus respectivos
          propietarios (YouTube y creadores). Es tu responsabilidad usar el contenido de manera legal.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Responsabilidad</h2>
        <p className="text-gray-700">
          El uso del sitio es bajo tu propio riesgo. SaveClipt no se hace responsable por el mal uso
          del contenido descargado ni por daños a terceros.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Modificaciones</h2>
        <p className="text-gray-700">
          Estos términos pueden actualizarse sin previo aviso. Te recomendamos revisarlos
          periódicamente para estar al tanto de los cambios.
        </p>
      </section>
    </main>
  )
}
