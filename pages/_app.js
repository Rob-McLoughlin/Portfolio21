import '../styles.css'
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
    document.addEventListener('visibilitychange', e => {
      if (document.visibilityState === 'hidden') {
        changeFavicon('/favicon/frame-2.ico')
      } else {
        changeFavicon('/favicon/frame-1.ico')
      }
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
