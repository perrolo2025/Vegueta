import Link from "next/link";
import { ChevronRight } from "lucide-react";


export const metadata = {
  title: "Guides to Download YouTube Videos and Convert to MP3 | SaveClipt 2025",
  description:
    "Discover our step-by-step tutorials to download YouTube videos for free, convert videos to MP3, and use SaveClipt on mobile or desktop. Updated for 2025.",
  alternates: {
    canonical: "https://saveclipt.com/en/article",
  },
};


const articles = [
  {
    title: "How to Download YouTube Videos for Free in 2025",
    href: "/en/article/how-to-download-youtube-videos",
    description: "Step-by-step tutorial for downloading YouTube videos without installing anything.",
  },
  {
    title: "Convert YouTube to MP3 for Free in 2025",
    href: "/en/article/youtube-to-mp3-free",
    description: "Extract audio from any YouTube video instantly and save it as an MP3 file.",
  },
  // Agregá más aquí cuando vayas creando nuevos artículos
];

export default function ArticleListPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Articles</h1>
      <ul className="space-y-6">
        {articles.map(({ title, href, description }) => (
          <li key={href} className="bg-white border rounded-xl p-5 shadow hover:shadow-md transition">
            <Link href={href} className="group block">
              <h2 className="text-xl font-semibold text-blue-600 group-hover:underline flex items-center gap-2">
                {title}
                <ChevronRight className="w-4 h-4" />
              </h2>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
