export const metadata = {
  title: 'Privacy Policy | SaveClipt YouTube Downloader',
  description:
    'Read the SaveClipt Privacy Policy. We do not track, store, or collect personal data. 100% anonymous, no registration, no tracking, no cookies.',
  alternates: {
    canonical: 'https://saveclipt.com/en/privacy', // sin slash final, consistente con lo indexado
    languages: {
      es: 'https://saveclipt.com/es/politica',
    },
  },
}

export default function PrivacyPolicyEN() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          At <strong>SaveClipt</strong>, we respect your privacy. This simulator tool is designed for
          educational and demonstration purposes only. We do not collect, process, or store any
          personal data from users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. No Personal Data Collection</h2>
        <p className="text-gray-700">
          SaveClipt does not request your name, email, or any personal information. No registration
          is required and no identifiable cookies or tracking data are used. This tool is purely a
          simulation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Third-Party Services</h2>
        <p className="text-gray-700">
          We may display ads using services like Google AdSense or Monetag. These platforms may use
          cookies to serve ads relevant to you. However, we do not collect, share, or sell any data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Security and HTTPS</h2>
        <p className="text-gray-700">
          SaveClipt uses HTTPS encryption to protect your browsing. No downloads, links, or history
          are stored. Your use of this site is completely anonymous and intended solely for
          educational demonstration purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update this privacy policy as needed. If you have any questions, please contact us
          at{' '}
          <a
            href="mailto:saveclip252@gmail.com"
            className="text-blue-600 hover:underline"
          >
            saveclip252@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  )
}
