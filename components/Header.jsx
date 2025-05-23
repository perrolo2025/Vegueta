'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Youtube, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  const navLinks = [
    {
      href: isEnglish ? '/en/faq' : '/es/faq',
      label: isEnglish ? 'FAQ' : 'Preguntas',
    },
    {
      href: isEnglish ? '/en/guide' : '/es/guia',
      label: isEnglish ? 'Guide' : 'Guía',
    },
    {
      href: isEnglish ? '/en/contact' : '/es/contacto',
      label: isEnglish ? 'Contact' : 'Contacto',
    },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white border-b shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo + Marca */}
        <Link
          href={isEnglish ? '/en' : '/es'}
          className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-red-600 hover:text-red-700 transition"
        >
          <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />
          <span>SaveClipt</span>
        </Link>

        {/* Menú desktop */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-gray-600 hover:text-red-600 transition">
              {label}
            </Link>
          ))}
        </nav>

        {/* Menú hamburguesa (mobile) */}
        <button onClick={toggleMenu} className="sm:hidden text-gray-600 hover:text-red-600">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú desplegable mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-white border-t px-6 py-4 space-y-4 text-center shadow-md"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-gray-700 hover:text-red-600 transition font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
