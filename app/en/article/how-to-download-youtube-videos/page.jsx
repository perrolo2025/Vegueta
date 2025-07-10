import Link from "next/link";
import { DownloadIcon, YoutubeIcon, SmartphoneIcon } from "lucide-react";

export const metadata = {
  title: "📥 How to Download YouTube Videos – Free, Fast & No Apps | SaveClipt",
  description:
    "Learn how to download YouTube videos to MP4 or MP3 in seconds – 100% free, no software, no registration. Updated step-by-step guide that works on all devices.",
  alternates: {
    canonical: "https://saveclipt.com/en/article/how-to-download-youtube-videos",
  },
};


export default function HowToDownloadYouTube() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          How to Download YouTube Videos for Free in 2025
        </h1>
        <p className="text-lg text-gray-600">
          Learn how to convert YouTube to MP4 or MP3 using <strong>SaveClipt</strong>—fast, free and online.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Why download YouTube videos?</h2>
        <p>
          Downloading videos from YouTube is useful when you want to watch offline, avoid ads, save tutorials, or archive content that might get deleted. With <strong>SaveClipt</strong>, you can do it fast and free—no installation required.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What is SaveClipt?</h2>
        <div className="flex items-center gap-3 mb-2">
          <YoutubeIcon className="w-6 h-6 text-red-500" />
          <p>
            SaveClipt is an online YouTube downloader that lets you save video or audio files instantly.
          </p>
        </div>
        <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
          <li>Works on PC, Android, and iPhone.</li>
          <li>Supports MP4 (video) and MP3 (audio).</li>
          <li>No registration or software required.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Step-by-step: how to download a video</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Copy the link of the YouTube video you want to download.</li>
          <li>
            Paste it into the input bar on{" "}
            <Link href="/en" className="text-blue-600 underline">
              SaveClipt
            </Link>.
          </li>
          <li>Click on <strong>“Search video”</strong>.</li>
          <li>Wait a few seconds for the preview to load.</li>
          <li>Select the format (MP4 or MP3) and click <strong>“Download”</strong>.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Is it mobile-friendly?</h2>
        <div className="flex items-center gap-3">
          <SmartphoneIcon className="w-6 h-6 text-green-600" />
          <p>
            Absolutely. SaveClipt works smoothly on Android and iOS. Just use your mobile browser—no app needed.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Is downloading YouTube videos legal?</h2>
        <p>
          It depends on how you use them. Downloading for personal and non-commercial use is generally allowed. SaveClipt doesn’t host any files or encourage piracy—use it responsibly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Tips for better results</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
          <li>Don't close the tab while loading.</li>
          <li>If MP3 fails, try MP4 (and vice versa).</li>
          <li>Disable ad blockers for smoother downloads.</li>
          <li>Copy the URL from the “Share” button on YouTube.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <p>
            <strong>Can I download Shorts?</strong> Yes, SaveClipt fully supports <b>YouTube Shorts</b>.
          </p>
          <p>
            <strong>Does it work with playlists?</strong> Not yet. One video at a time.
          </p>
          <p>
            <strong>Is HD quality available?</strong> Yes, you can download up to 1080p if available.
          </p>
        </div>
      </section>

      <footer className="text-center mt-12">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-lg transition"
        >
          <DownloadIcon className="w-5 h-5" />
          Go to the YouTube Converter
        </Link>
      </footer>
    </article>
  );
}
