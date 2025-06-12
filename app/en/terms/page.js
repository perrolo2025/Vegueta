export const metadata = {
  title: 'Terms of Use | SaveClipt YouTube Downloader',
  description:
    'Read the official Terms of Use for SaveClipt. Learn how to use our YouTube downloader responsibly, securely, and within legal boundaries.',
  alternates: {
    canonical: 'https://saveclipt.com/en/terms', // sin slash final, consistente con lo indexado
    languages: {
      es: 'https://saveclipt.com/es/terminos',
    },
  },
}


export default function TermsEN() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions of Use</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Acceptable Use</h2>
        <p className="text-gray-700">
          By using SaveClipt, you agree to use it solely for personal, educational, and research purposes.
          This platform is a simulation tool and does not provide real downloads. Any use of the content
          simulated is at your own responsibility and should comply with applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
        <p className="text-gray-700">
          SaveClipt does not host, store, or distribute any actual videos or audio files. All rights belong to
          their respective owners (e.g., YouTube and content creators). You are fully responsible for ensuring
          compliance with copyright laws and platform terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Liability</h2>
        <p className="text-gray-700">
          Your use of this simulated site is at your own risk. SaveClipt is not liable for any misuse of
          simulated downloads or any harm caused to third parties. This is a demonstration platform only.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Updates and Changes</h2>
        <p className="text-gray-700">
          These terms may be updated at any time without prior notice. We recommend reviewing them
          regularly to stay informed of any changes. Continued use of SaveClipt indicates acceptance of these terms.
        </p>
      </section>
    </main>
  )
}
