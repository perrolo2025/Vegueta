import { Download, PlayCircle } from 'lucide-react'
import Simulador from '@/components/Simulador'

export const metadata = {
  title: '📥 Download YouTube Videos in MP4 or MP3 – Free & No Watermark | SaveClipt',
  description:
    '🎧 Convert and download YouTube videos to MP4 or MP3 in seconds. 100% free, no registration, no watermark, and works perfectly on all devices.',
  keywords:
    'download YouTube videos, YouTube to MP3, MP4 YouTube downloader, free YouTube converter, SaveClipt, HD no watermark, fast YouTube download, convert videos online',
  alternates: {
    canonical: 'https://saveclipt.com/en',
    languages: {
      es: 'https://saveclipt.com/es',
    },
  },
  openGraph: {
    title: '📥 Download YouTube Videos – MP4 or MP3 Free & Fast | SaveClipt',
    description:
      'Convert YouTube videos to MP4 or MP3 instantly. No registration, no watermark, 100% free and mobile-friendly.',
    url: 'https://saveclipt.com/en',
    type: 'website',
    images: ['https://saveclipt.com/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download YouTube Videos – Free MP4 & MP3 Converter | SaveClipt',
    description:
      'Fast & secure YouTube downloader. Convert to MP3 or MP4 for free. No login, no watermark – just paste and download!',
    images: ['https://saveclipt.com/favicon.png'],
  },
}

export default function HomePageEN() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-14 text-gray-800">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          🎮 Download YouTube Videos in MP4 or MP3 for Free – No Software Needed
        </h1>

        <p className="text-lg text-gray-600 mb-2">
          With <strong>SaveClipt</strong>, you can <strong>download any YouTube video</strong> quickly and easily. 
          Convert videos to <em>HD MP4</em> or extract just the <em>audio as high-quality MP3</em>, no software or signup required.
        </p>

        <p className="text-gray-600 mb-2">
          Choose from <strong>360p, 720p, 1080p, or even 4K resolution</strong>. You can also convert to <strong>MP3 up to 320kbps</strong> 
          for music playback on any device.
        </p>

        <p className="text-gray-600 mb-2">
          Fully compatible with <strong>Android</strong>, <strong>iPhone</strong>, <strong>Windows</strong>, <strong>Mac</strong>, and all major browsers. 
          Use it on mobile, tablet, or desktop—no restrictions.
        </p>

        <p className="text-gray-600 mb-2">
          SaveClipt is the <strong>best online YouTube MP4 converter</strong> of 2025, ideal for anyone who wants to 
          <em>download long videos, Shorts, documentaries, or music</em> from YouTube with no watermark.
        </p>

        <p className="text-gray-600">
          Try our <strong>free YouTube video downloader</strong> today and convert content in seconds. 
          100% free, no limits, no software!
        </p>

        <div className="mt-10">
          <Simulador />
        </div>
      </section>

      <section className="flex flex-col items-center mb-16">
  <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
    🎬 Examples of Popular YouTube Videos You Can Download with SaveClipt
  </h2>

  <p className="text-center text-gray-600 max-w-2xl mb-8">
    Below are real YouTube video thumbnails you can download in <strong>MP4 up to 4K</strong> 
    or convert to <strong>high-quality MP3</strong> using our free downloader. Works on all 
    devices: <strong>phones, tablets, and computers</strong>.
  </p>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      'ysz5S6PUM-U',
      'dQw4w9WgXcQ',
      '3JZ_D3ELwOQ',
    ].map((id) => (
      <div key={id} className="rounded-lg overflow-hidden shadow-lg max-w-xs">
        <img
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={`YouTube video thumbnail ${id}`}
          title="Click to preview video"
          aria-label={`Download or convert video ${id}`}
          loading="lazy"
          className="w-full h-auto"
        />
        <p className="text-sm text-center mt-2 text-gray-600">
          Convert to <strong>HD MP4</strong> or <strong>MP3 320kbps</strong> in seconds.
        </p>
      </div>
    ))}
  </div>
</section>


<section id="how-to-download" className="bg-gray-50 rounded-xl p-8 mb-16 shadow-sm">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
    <Download className="w-6 h-6 text-blue-600" />
    Step-by-Step Guide: Download YouTube Videos in MP4 or MP3 (No App Required)
  </h2>

  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
    Learn how to use <strong>SaveClipt</strong> to quickly <strong>download YouTube videos in HD MP4 format</strong>{' '}
    or convert them to <strong>MP3 audio at 320kbps</strong>. 100% online, compatible with <strong>Windows, macOS, Android, iOS</strong>, and{' '}
    modern browsers like <strong>Chrome, Firefox, Safari, Brave</strong> and more. No installations or signups required.
  </p>

  <ol className="list-decimal list-inside text-gray-700 space-y-3">
    <li>
      <strong>Copy the video URL:</strong> go to YouTube, open the video, and copy its link from the browser or app.
    </li>
    <li>
      <strong>Paste it into SaveClipt:</strong> return to this page, paste the link into the input field and click <em>&quot;Search Video&quot;</em>.
    </li>
    <li>
      <strong>Choose the download format:</strong> select between <strong>MP4</strong> (360p, 720p, 1080p, or 4K) for video, or <strong>MP3 (up to 320kbps)</strong> for audio.
    </li>
    <li>
      <strong>Click &quot;Download&quot;:</strong> your video or audio file will be processed and ready to save in just seconds.
    </li>
  </ol>

  <p className="mt-6 text-sm text-gray-500 italic">
    SaveClipt is one of the most efficient <strong>YouTube video downloaders and converters</strong> available in 2025 — no limits, no login, and no software needed.
  </p>
</section>


<section id="features" className="mb-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
    <PlayCircle className="w-6 h-6 text-green-600" />
    Powerful Features of SaveClipt YouTube Video Converter
  </h2>

<p className="text-gray-600 mb-6 text-sm leading-relaxed">
  <strong>SaveClipt</strong> is more than just a YouTube downloader. It&apos;s a professional, free online tool that lets you{' '}
  <strong>convert and download YouTube videos to MP4 or MP3</strong> without watermarks, apps, or registration. Fast, secure, and fully
  compatible with all devices and browsers.
</p>


  <div className="grid sm:grid-cols-2 gap-6">
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow">
      <h3 className="font-bold text-gray-900 mb-2">🎥 Download in MP4 or MP3</h3>
      <p>
        SaveClipt lets you instantly convert YouTube videos to <strong>MP4 in HD quality</strong> or extract the{' '}
        <strong>audio as MP3</strong>. Perfect for saving songs, tutorials, interviews, and long-form content.
      </p>
    </div>

    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow">
      <h3 className="font-bold text-gray-900 mb-2">🔊 MP3 Audio at 320kbps</h3>
      <p>
        Enjoy music with crystal-clear sound. Convert YouTube to <strong>MP3 up to 320kbps</strong>, compatible with any device or music
        player, with no quality loss.
      </p>
    </div>

    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow">
      <h3 className="font-bold text-gray-900 mb-2">📱 Works on All Devices</h3>
      <p>
        Compatible with <strong>Android, iPhone, Windows, Mac, Linux</strong> and all major browsers like{' '}
        <strong>Chrome, Firefox, Safari, Edge</strong>. No installation or browser extensions required.
      </p>
    </div>

    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow">
      <h3 className="font-bold text-gray-900 mb-2">💯 100% Free & Unlimited</h3>
      <p>
        No signups, no subscriptions, no restrictions. SaveClipt is a <strong>completely free online YouTube converter</strong> offering
        unlimited downloads with zero ads or limits.
      </p>
    </div>
  </div>

  <p className="mt-6 text-sm text-gray-500 italic">
    Join thousands of users who rely on SaveClipt as the <strong>best free YouTube to MP4 and MP3 converter</strong>. Try it now and start
    downloading without limitations.
  </p>
</section>



<section id="top-keywords" className="mb-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">
    🔍 Top Search Keywords That Rank SaveClipt on Google
  </h2>

  <p className="text-gray-600 text-sm mb-4">
    Below are some of the <strong>most popular search terms</strong> on Google related to YouTube video downloads.
    SaveClipt ranks high thanks to its <strong>fast performance, mobile-friendly interface,</strong> and <strong>no-installation technology</strong>.
  </p>

  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
    <li>
      <strong>Download YouTube videos without software</strong>: get any video directly in your browser — no apps or plugins required.
    </li>
    <li>
      <strong>Best YouTube to MP3 converter 320kbps free</strong>: extract high-quality MP3 audio instantly from any YouTube video.
    </li>
    <li>
      <strong>Online YouTube downloader for PC and mobile</strong>: works flawlessly on Windows, Android, iOS, iPadOS, and all modern browsers.
    </li>
    <li>
      <strong>Convert YouTube to MP4 online in HD</strong>: choose between 360p, 720p, 1080p, or even 4K without any registration.
    </li>
    <li>
      <strong>Download full-length YouTube videos in high quality</strong>: perfect for podcasts, movies, interviews, and long tutorials.
    </li>
  </ul>

  <p className="mt-6 text-sm text-gray-500 italic">
    These SEO-optimized keywords help position SaveClipt as the leading <strong>free YouTube video and audio downloader in English</strong> for 2025 — trusted by thousands of users worldwide.
  </p>
</section>


<section id="legal-disclaimer" className="text-sm text-gray-500 border-t pt-6 mt-16">
  <h2 className="text-base font-semibold text-gray-700 mb-2">
    ⚖️ Legal Disclaimer and Responsible Use Policy
  </h2>

  <p className="mb-2">
    <strong>SaveClipt</strong> is an independent platform and is not affiliated with, endorsed by, or connected to <strong>YouTube™, Google LLC</strong>, or any third-party content provider.
  </p>

  <p className="mb-2">
    This tool is designed strictly for <strong>personal, educational, and research purposes</strong>. Users must comply with all applicable <strong>copyright laws, digital content regulations,</strong> and the <strong>YouTube Terms of Service</strong>.
  </p>

  <p className="mb-2">
    You are solely responsible for any use of this simulation tool. SaveClipt <strong>does not host, store, or facilitate the download of copyrighted content</strong>. This site simulates the experience of downloading videos for demonstration purposes only.
  </p>

  <p>
    Any misuse or illegal use of this platform is the sole responsibility of the user. We strictly adhere to <strong>DMCA compliance</strong>, privacy, and ethical content usage.
  </p>
</section>


    </main>
  )
}
