
export const metadata = {
  title: 'Contacto – Soporte y consultas | SaveClipt',
  description: '¿Tenés dudas o sugerencias? Contactá al equipo de SaveClipt para soporte técnico, reportes o alianzas. Respondemos rápido y estamos para ayudarte.',
}

export default function ContactoPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto – SaveClipt',
    url: 'https://saveclipt.com/es/contacto',
    mainEntity: {
      '@type': 'Organization',
      name: 'SaveClipt',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'saveclip252@gmail.com',
        contactType: 'customer support',
        availableLanguage: ['Spanish', 'English'],
      },
    },
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contacto con SaveClipt</h1>

      <p className="text-gray-700 mb-4">
        Si tenés alguna consulta, sugerencia, reporte de error o propuesta comercial, no dudes en escribirnos. Nuestro equipo está disponible para ayudarte lo más pronto posible.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <p className="text-gray-800">
          📧 <strong>Email de contacto:</strong>{' '}
          <a
            href="mailto:saveclip252@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            saveclip252@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Respondemos dentro de las próximas 24 a 48 horas hábiles.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">¿Por qué contactar a SaveClipt?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Obtener soporte técnico personalizado.</li>
        <li>Reportar errores o problemas de descarga.</li>
        <li>Solicitar mejoras o nuevas funcionalidades.</li>
        <li>Explorar colaboraciones o alianzas comerciales.</li>
        <li>Resolver dudas sobre el uso de la plataforma.</li>
      </ul>

      {/* SEO: JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </main>
  )
}
