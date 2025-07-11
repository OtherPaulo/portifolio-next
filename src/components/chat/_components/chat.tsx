"use client"

import { useState, useEffect } from 'react'
import { X, SendHorizontal } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Chat() {
  const t = useTranslations('chat')
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const [showFirstMessage, setShowFirstMessage] = useState(false)

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true)
      setShowFirstMessage(false)
      setTimeout(() => setShowFirstMessage(true), 700)
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const timer = setInterval(updateTime, 60000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      const phoneNumber = '5592994094783'
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
      setMessage('')
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[10001] flex flex-col items-end pointer-events-auto">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 mb-4 overflow-hidden">
          <div className="bg-emerald-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img
                  src="/user-perfil.jpeg?height=40&width=40"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Paulo</h3>
                <p className="text-emerald-200 text-sm">{t('online')}</p>
              </div>
            </div>
            <button 
              onClick={toggleChat} 
              className="text-white hover:text-emerald-200"
              aria-label="Fechar chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div 
            className="h-50 overflow-y-auto p-2 bg-emerald-50 dark:bg-gray-700"
            style={{
              backgroundImage: `url('/bg-whatsapp.jpeg')`,
              backgroundPosition: 'center',
            }}
          >
              <div className="bg-white p-2 text-black dark:text-black rounded-lg shadow mb-2 max-w-[80%] flex justify-between">
                <div className="flex items-center space-x-1">
                  <p>{t('hello')}</p>
                  <img 
                  src="/emoji.svg" 
                  alt="Emoji Hello" 
                  className="w-6 h-6" 
                  />
                </div>
                <span className="text-xs mt-4 text-gray-500 dark:text-gray-400">{currentTime}</span>
              </div>

            {showFirstMessage && (
              <div className="bg-white p-2 text-black dark:text-black rounded-lg shadow mb-2 max-w-[80%] flex justify-between">
                <p>{t('question')}</p>
                <span className="text-xs mt-4 text-gray-500 dark:text-gray-400">{currentTime}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-2 ">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('placeholder')}
                  className="flex-grow p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-white dark:text-black dark:border-gray-600 placeholder:text-left placeholder:whitespace-pre-line"
                  aria-label={t('placeholder')}
                />
                <button
                  type="submit"
                  className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label={t('submit')}
                >
                  <SendHorizontal className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emercel-500"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    </div>
  )
}