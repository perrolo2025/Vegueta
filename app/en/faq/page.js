export const metadata = {
  title: 'Download YouTube Videos in MP4 & MP3 FREE & FAST | SaveClipt FAQ',
  description:
    'Learn how to download YouTube videos in MP4 and MP3 formats for free and instantly with SaveClipt. No apps, no registration, and 100% secure. Get started now!',
  keywords: [
    'download YouTube videos free',
    'convert YouTube to MP3',
    'save YouTube videos 1080p MP4',
    'fast YouTube video downloader',
    'free YouTube converter MP3 MP4',
    'SaveClipt FAQ guide',
    'YouTube Shorts downloader tool',
  ],
  alternates: {
    canonical: 'https://saveclipt.com/en/faq',
    languages: {
      es: 'https://saveclipt.com/es/faq',
    },
  },
  openGraph: {
    title: 'Download YouTube Videos in MP4 & MP3 FREE & FAST | SaveClipt',
    description:
      'SaveClipt is your free and secure tool for downloading YouTube videos in MP4 and MP3 formats. Learn how it works and start downloading instantly.',
    url: 'https://saveclipt.com/en/faq',
    type: 'website',
    images: ['https://saveclipt.com/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download YouTube Videos in MP4 & MP3 FREE & FAST | SaveClipt',
    description:
      'Learn how to download YouTube videos in MP4 and MP3 formats for free with SaveClipt. No software, no registration – just fast and easy downloading!',
    images: ['https://saveclipt.com/favicon.png'],
  },
}


export default function FAQPageEN() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is it legal to download YouTube videos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, as long as it is for personal use. Commercial use or redistribution without permission may infringe copyright laws.',
        },
      },
      {
        '@type': 'Question',
        name: 'What formats and qualities are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can download videos in MP4 (360p, 720p, 1080p, 4K) or extract audio in MP3 up to 320kbps using SaveClipt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I download YouTube Shorts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. SaveClipt allows you to download Shorts just like any other video, in both MP4 and MP3.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does SaveClipt work on all devices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It works on Windows, macOS, Android, iOS, Linux, and all modern browsers. No installation required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does a download sometimes fail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It could be due to invalid links, private videos, regional restrictions, or temporary errors. Double-check the URL and try again.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is SaveClipt really free and safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It is 100% free, does not require registration, and does not track or store your data. Downloads are private and anonymous.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I download multiple videos at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, SaveClipt supports one download at a time to maintain speed and quality. Batch downloading is coming soon.',
        },
      },
    ],
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions – SaveClipt
      </h1>

      <p className="text-gray-700 text-base mb-10">
        Here you will find answers to the most common questions about{' '}
        <strong>SaveClipt</strong>, the best online tool to{' '}
        <strong>download YouTube videos in MP4 or MP3 format</strong>. Learn how it works, how to
        convert content, and why it&apos;s 100% safe and free for everyone.
      </p>

      <dl className="text-gray-800">
        {[
          {
            q: 'Is it legal to download YouTube videos?',
            a: 'Yes, as long as it is for personal use. Commercial use may infringe copyright laws.',
          },
          {
            q: 'What formats and qualities are supported?',
            a: 'SaveClipt supports MP4 (360p, 720p, 1080p, 4K) and MP3 conversion up to 320kbps.',
          },
          {
            q: 'Can I download YouTube Shorts?',
            a: 'Yes! SaveClipt lets you download Shorts just like full-length videos.',
          },
          {
            q: 'Does SaveClipt work on all devices?',
            a: 'Yes. Compatible with Windows, macOS, iPhone, Android, and all browsers. No installation needed.',
          },
          {
            q: 'Why does a download sometimes fail?',
            a: 'It might be due to invalid links, private videos, geo-blocks, or server issues. Try again later.',
          },
          {
            q: 'Is SaveClipt really free and secure?',
            a: '100%. No sign-up, no tracking, no saved data. Just fast, anonymous downloads.',
          },
          {
            q: 'Can I download multiple videos at once?',
            a: 'Not yet. We currently support one at a time to ensure reliability. Multi-download support is coming soon.',
          },
        ].map((item, i) => (
          <div className="mb-6" key={i}>
            <dt className="font-semibold text-lg">{item.q}</dt>
            <dd className="text-gray-700 mt-1">{item.a}</dd>
          </div>
        ))}
      </dl>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mt-10 flex justify-center">
  <a
    href="https://saveclipt.com/en"
    className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg shadow hover:opacity-90 transition"
    style={{ backgroundColor: '#ff0000' }} // Rojo del logo SaveClipt
  >
    Keep Downloading More Videos
  </a>
</div>


    </main>
  )
}
