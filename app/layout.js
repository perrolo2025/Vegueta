import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script";


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
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
  

        <Script
          id="monetag-popunder"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = "//madurird.com/tag.min.js";
                script.setAttribute("data-zone", "9117120"); // <-- tu ID de zona Popunder
                script.setAttribute("data-cfasync", "false");
                script.async = true;
                script.onerror = function () { window._lxwahpa && window._lxwahpa(); };
                script.onload = function () { window._dvvosq && window._dvvosq(); };
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}