import React, { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [animateText, setAnimateText] = useState(false)
  const [hideUnderline, setHideUnderline] = useState(false)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(1)

  useEffect(() => {
    setTheme(Math.floor(Math.random() * 2) + 1)

    // Underline starts fading after reaching the end
    const underlineFade = setTimeout(() => {
      setHideUnderline(true)
    }, 2000)

    // Text gradient animation
    const textAnimation = setTimeout(() => {
      setAnimateText(true)
    }, 1500)

    // Remove loader
    const finish = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => {
      clearTimeout(underlineFade)
      clearTimeout(textAnimation)
      clearTimeout(finish)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-9999 ${theme === 1 ? "bg-primary-blue" : "bg-white"
        }`}
    >
      <div className="relative inline-block">
        {/* Logo */}
        <h1
          className={`text-7xl font-black uppercase transition-all duration-1000 ${animateText
              ? theme === 1
                ? "bg-[linear-gradient(135deg,var(--color-light-gray)_0%,var(--color-light-gray)_70%,var(--color-accent-pink)_100%)] bg-clip-text text-transparent"
                : "bg-[linear-gradient(135deg,var(--color-primary-blue)_0%,var(--color-primary-blue)_70%,var(--color-accent-pink)_100%)] bg-clip-text text-transparent"
              : theme === 1
                ? "text-white"
                : "text-primary-blue"
            }`}
        >
          NERD
        </h1>

        {/* Underline */}
        <div className="absolute -bottom-2 left-0 w-full h-[4px] overflow-hidden">
          <span
            className={`block h-full rounded-full origin-left transition-all duration-1000 ${hideUnderline
              ? "opacity-100 bg-linear-to-r from-accent-pink via-accent-pink/60 to-transparent"
              : "opacity-100 bg-linear-to-r from-accent-pink via-accent-pink to-transparent"
              }`}
            style={{
              animation: hideUnderline ? "none" : "underlineGrow 2s ease forwards",
            }}
          />
        </div>
      </div>

      <style>{`
                @keyframes underlineGrow {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }
            `}</style>
    </div>
  )
}

export default LoadingScreen