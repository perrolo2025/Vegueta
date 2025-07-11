import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SaveClipt",
  description: "Fast and secure YouTube downloader.",
  metadataBase: new URL("https://saveclipt.com/"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-v6.png", type: "image/png" },
    ],
    apple: "/favicon-v6.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* ✅ Meta de verificación Yandex */}
        <meta name="yandex-verification" content="2e318a357cb8edd9" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        {/* 📈 Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5DN8HFJZH3"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5DN8HFJZH3');
            `,
          }}
        />
      </body>
    </html>
  );
}
