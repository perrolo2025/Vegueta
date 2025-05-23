'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  return (
    <footer className="mt-20 border-t border-gray-200 bg-white py-10 text-center text-sm text-gray-700">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:justify-between">
        <p className="font-medium leading-relaxed text-gray-800">
          {isEnglish
            ? 'SaveClipt © 2025 – Fast, safe, and free tool to download and convert YouTube videos to MP4 or MP3 online. No registration required.'
            : 'SaveClipt © 2025 – Herramienta rápida, segura y gratuita para descargar o convertir videos de YouTube a MP4 o MP3 online. Sin necesidad de registro.'}
        </p>

        <nav className="flex flex-wrap justify-center gap-4">
          <Link
            href={isEnglish ? '/en/faq' : '/es/faq'}
            className="hover:underline hover:text-blue-600"
          >
            {isEnglish ? 'FAQ' : 'Preguntas frecuentes'}
          </Link>
          <Link
            href={isEnglish ? '/en/guide' : '/es/guia'}
            className="hover:underline hover:text-blue-600"
          >
            {isEnglish ? 'How it Works' : 'Cómo funciona'}
          </Link>
          <Link
            href={isEnglish ? '/en/privacy' : '/es/politica'}
            className="hover:underline hover:text-blue-600"
          >
            {isEnglish ? 'Privacy Policy' : 'Política de privacidad'}
          </Link>
          <Link
            href={isEnglish ? '/en/terms' : '/es/terminos'}
            className="hover:underline hover:text-blue-600"
          >
            {isEnglish ? 'Terms of Use' : 'Términos de uso'}
          </Link>

            <Link
    href={isEnglish ? '/en/contact' : '/es/contacto'}
    className="hover:underline hover:text-blue-600"
  >
    {isEnglish ? 'Contact' : 'Contacto'}
  </Link>
  
        </nav>
      </div>

      <div className="mt-6 text-xs text-gray-500 px-4 max-w-4xl mx-auto leading-relaxed">
        {isEnglish ? (
          <>
            SaveClipt is a third-party tool not associated with YouTube™, Google LLC, or any of its subsidiaries. Use this service only for legal, personal, or educational purposes. We encourage users to respect copyright and content licensing policies when downloading or converting YouTube videos. All trademarks belong to their respective owners.
          </>
        ) : (
          <>
            SaveClipt es una herramienta de terceros no asociada con YouTube™, Google LLC ni con ninguna de sus filiales. Usa este servicio únicamente con fines legales, personales o educativos. Recomendamos respetar los derechos de autor y las licencias de contenido al descargar o convertir videos de YouTube. Todas las marcas registradas pertenecen a sus respectivos propietarios.
          </>
        )}
      </div>
    </footer>
  )
}
