export const metadata = {
  title: 'Contact – Support and Inquiries | SaveClipt',
  description:
    'Need help or have suggestions? Contact the SaveClipt team for technical support, feedback, or business inquiries. We reply quickly and are here to help.',
  alternates: {
    canonical: 'https://saveclipt.com/en/contact', // sin slash final, consistente con lo indexado
    languages: {
      es: 'https://saveclipt.com/es/contacto',
    },
  },
}


export default function ContactPageEN() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact – SaveClipt',
    url: 'https://saveclipt.com/en/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'SaveClipt',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'saveclip252@gmail.com',
        contactType: 'customer support',
        availableLanguage: ['English', 'Spanish'],
      },
    },
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact SaveClipt</h1>

      <p className="text-gray-700 mb-4">
        If you have any questions, suggestions, error reports, or partnership ideas, feel free to reach out. Our team is available to assist you as quickly as possible.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <p className="text-gray-800">
          📧 <strong>Contact email:</strong>{' '}
          <a
            href="mailto:saveclip252@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            saveclip252@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          We typically respond within 24 to 48 business hours.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Why contact SaveClipt?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Get fast and personalized technical support.</li>
        <li>Report bugs or video download issues.</li>
        <li>Suggest improvements or new features.</li>
        <li>Discuss potential business partnerships or collaborations.</li>
        <li>Resolve doubts about using the SaveClipt platform.</li>
      </ul>

      {/* SEO: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </main>
  )
}
