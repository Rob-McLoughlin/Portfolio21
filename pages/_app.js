import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'

const changeFavicon = src => {
  const link = document.createElement('link')
  const oldLink = document.getElementById('dynamic-favicon')
  link.id = 'dynamic-favicon'
  link.rel = 'shortcut icon'
  link.href = src
  if (oldLink) {
    document.head.removeChild(oldLink)
  }
  document.head.appendChild(link)
}

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    const frames = 6
    let currentFrame = '/favicon/frame-1.ico'
    let count = 0
    let interval
    document.addEventListener('visibilitychange', e => {
      if (document.visibilityState === 'hidden') {
        interval = setInterval(() => {
          count += 1
          currentFrame = `/favicon/frame-${count}.ico`
          changeFavicon(currentFrame)
          if (count === frames) {
            count = 0
          }
        }, 200)
      } else {
        clearInterval(interval)
      }
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
