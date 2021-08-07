import '../styles.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-545LPZB'
}

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
  const router = useRouter()
  useEffect(() => {
    // Tag Manager
    TagManager.initialize(tagManagerArgs)

    // Changes the favicon on leaving the page
    document.addEventListener('visibilitychange', e => {
      if (document.visibilityState === 'hidden') {
        changeFavicon('/favicon/frame-2.ico')
      } else {
        changeFavicon('/favicon/frame-1.ico')
      }
    })
  }, [router.events])
  return <Component {...pageProps} />
}

export default MyApp
