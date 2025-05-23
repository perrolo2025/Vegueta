import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "SaveClipt",
  description: "Fast and secure YouTube downloader.",
  metadataBase: new URL("https://saveclipt.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-v6.png", type: "image/png" },
    ],
    apple: "/favicon-v6.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        {/* ✅ Popunder Anti-AdBlock (siempre activo) */}
        <Script
          id="monetag-popunder"
          strategy="afterInteractive"
          src="https://fpyf8.com/88/tag.min.js"
          data-zone="125051"
          async
          data-cfasync="false"
        />

        {/* ✅ Vignette solo en móviles */}
        <Script
          id="monetag-vignette-mobile"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.innerWidth <= 768) {
                (function(d,z,s){
                  s.src='https://'+d+'/401/'+z;
                  try{(document.body||document.documentElement).appendChild(s)}
                  catch(e){}
                })('gizokraijaw.net',8736712,document.createElement('script'));
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
