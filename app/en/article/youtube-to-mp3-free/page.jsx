import Link from "next/link";
import { MusicIcon, YoutubeIcon, DownloadIcon } from "lucide-react";

export const metadata = {
  title: "Convert YouTube to MP3 for Free in 2025 | SaveClipt",
  description:
    "Convert YouTube videos to MP3 for free in seconds. No registration or installation required. Use SaveClipt to extract audio from YouTube now.",
  alternates: {
    canonical: "https://saveclipt.com/en/article/youtube-to-mp3-free",
  },
};

export default function YoutubeToMp3Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          Convert YouTube to MP3 for Free in 2025
        </h1>
        <p className="text-lg text-gray-600">
          Extract audio from YouTube videos instantly with <strong>SaveClipt</strong>. Fast, secure and 100% free.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What is a YouTube to MP3 Converter?</h2>
        <div className="flex items-center gap-3 mb-2">
          <MusicIcon className="w-6 h-6 text-green-600" />
          <p>
            It’s a tool that lets you extract the audio from any YouTube video and save it as an MP3 file.
          </p>
        </div>
        <p className="mt-2">
          <strong>SaveClipt</strong> allows you to do this online, without any registration or software. Ideal for music, podcasts, lectures, or offline listening.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Why convert YouTube to MP3?</h2>
        <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
          <li>Save mobile data and battery while listening offline.</li>
          <li>Avoid ads and background video playback.</li>
          <li>Create personal music or podcast collections.</li>
          <li>Great for gym, driving, or background audio use.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">How to use SaveClipt (Step-by-Step)</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Copy the URL of the YouTube video you want to convert.</li>
          <li>
            Paste it into the input box at{" "}
            <Link href="/en" className="text-blue-600 underline">
              SaveClipt
            </Link>.
          </li>
          <li>Click on <strong>“Search video”</strong>.</li>
          <li>Wait for the preview to load.</li>
          <li>Select <strong>MP3 (Audio Only)</strong> and click <strong>“Download”</strong>.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Does it work on mobile?</h2>
        <p>
          Yes! SaveClipt works perfectly on any smartphone—Android or iPhone. You only need your browser.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Is it legal to convert YouTube videos to MP3?</h2>
        <p>
          It depends on the copyright of the content. Always use SaveClipt for personal and non-commercial purposes. The platform doesn’t host or store any files.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
        <p className="mb-2">
          <strong>Can I convert YouTube Shorts?</strong> Yes, Shorts are supported just like any regular video.
        </p>
        <p className="mb-2">
          <strong>Does it work with playlists?</strong> Not yet. Please convert one video at a time.
        </p>
        <p className="mb-2">
          <strong>Is there a quality limit?</strong> MP3 files are extracted in standard quality suitable for all devices.
        </p>
      </section>

      <footer className="text-center mt-12">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full text-lg transition"
        >
          <DownloadIcon className="w-5 h-5" />
          Convert YouTube to MP3 now
        </Link>
      </footer>
    </article>
  );
}
