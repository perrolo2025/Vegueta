'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Simulador() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showPreview, setShowPreview] = useState(false)
  const [failed, setFailed] = useState(false)
  const [mainDownloadProgress, setMainDownloadProgress] = useState(0)
  const [extraProgress, setExtraProgress] = useState({ 2: 0, 3: 0, 4: 0 })
  const [messages, setMessages] = useState({ 2: '', 3: '', 4: '' })

  const t = {
    title: isEnglish
      ? 'Free YouTube Video Downloader – MP4 HD Without Watermark'
      : 'Descargador de videos de YouTube gratis – MP4 HD sin marca de agua',
    placeholder: isEnglish ? 'https://youtu.be/example' : 'https://youtu.be/ejemplo',
    button: isEnglish ? 'Download now' : 'Descargar ahora',
    loading: isEnglish ? 'Searching for video information...' : 'Buscando información del video...',
    preview: isEnglish ? 'YouTube Video Preview' : 'Vista previa del video de YouTube',
    desc: isEnglish
      ? 'Download YouTube video – High quality MP4 without watermark'
      : 'Descargar video de YouTube – Calidad HD sin marca de agua',
    format: isEnglish ? 'Available format: 1080p MP4' : 'Formato disponible: 1080p MP4',
    fail: isEnglish
      ? '❌ Download failed. Try the next option.'
      : '❌ La descarga falló. Intenta con la siguiente opción.',
    servers:
      '⚠️ ' +
      (isEnglish
        ? 'Servers are overloaded. Please try again in 10 minutes.'
        : 'Los servidores están sobrecargados. Intenta nuevamente en 10 minutos.'),
    options: isEnglish ? 'Option' : 'Opción',
  }

  const simulateProgress = (callback, setFunction) => {
    let current = 0
    const interval = setInterval(() => {
      current += 1
      setFunction(current)
      if (current >= 100) {
        clearInterval(interval)
        if (callback) callback()
      }
    }, 600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPreview(false)
    setFailed(false)
    setLoading(true)
    setProgress(0)
    setMainDownloadProgress(0)
    setExtraProgress({ 2: 0, 3: 0, 4: 0 })
    setMessages({ 2: '', 3: '', 4: '' })

    simulateProgress(() => {
      setLoading(false)
      setShowPreview(true)
    }, setProgress)
  }

  const handleFakeDownload = () => {
    simulateProgress(() => {
      setFailed(true)
    }, setMainDownloadProgress)
  }

  const handleOptionDownload = (option) => {
    simulateProgress(() => {
      setMessages((prev) => ({
        ...prev,
        [option]: option === 4 ? t.servers : t.fail,
      }))
    }, (value) => setExtraProgress((prev) => ({ ...prev, [option]: value })))
  }

  return (
    <div className="bg-white border shadow rounded-xl p-6 space-y-6 text-center mt-10">
      <h2 className="text-xl font-bold text-gray-800">{t.title}</h2>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="url"
          placeholder={t.placeholder}
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-2 border rounded-md text-sm"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          {t.button}
        </button>
      </form>

      {loading && (
        <div className="w-full mt-6">
          <p className="text-sm text-gray-600 mb-2">{t.loading}</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-500 h-3 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm mt-2">{progress}%</p>
        </div>
      )}

      {showPreview && (
        <div className="bg-gray-100 rounded-lg p-4 mt-4 text-left">
          <p className="text-center text-sm text-gray-600 mb-2">{t.preview}</p>
          <div className="flex flex-col items-center gap-4">
            <img
              src={isEnglish ? '/no-preview-en.png' : '/imagen-no-disponible.png'}
              alt="preview"
              className="w-full max-w-md h-auto rounded-lg border shadow"
            />
            <p className="text-center font-semibold text-gray-800">{t.desc}</p>
            <p className="text-center text-xs text-gray-600">{t.format}</p>

            <button
              onClick={handleFakeDownload}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-transform duration-200 hover:scale-105 font-semibold shadow-md"
            >
              {isEnglish ? '⬇️ Download MP4 in HD' : '⬇️ Descargar MP4 en HD'}
            </button>

            {mainDownloadProgress > 0 && (
              <div className="w-full max-w-sm mt-2">
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${mainDownloadProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">{mainDownloadProgress}%</p>
              </div>
            )}

            {failed && (
              <>
                <p className="text-sm text-red-600 italic mt-4">{t.fail}</p>
                <div className="mt-4 text-sm flex flex-col items-center gap-4 w-full max-w-md">
                  {[2, 3, 4].map((i) => (
                    <div key={i} className="w-full">
                      <button
                        onClick={() => handleOptionDownload(i)}
                        className="w-full bg-gray-100 border px-4 py-2 rounded-md shadow hover:bg-gray-200"
                      >
                        {t.options} {i}
                      </button>
                      {extraProgress[i] > 0 && (
                        <div className="w-full mt-2">
                          <div className="w-full bg-gray-300 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${extraProgress[i]}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{extraProgress[i]}%</p>
                        </div>
                      )}
                      {messages[i] && (
                        <p className="text-xs text-gray-700 italic mt-1">{messages[i]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
