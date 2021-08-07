const dev = process.env.NODE_ENV !== 'production'
const deploymentServer = process.env.VERCEL_URL || 'http://localhost:3000'

export const socials = {
  mail: 'mailto:robbiemcloughlin@gmail.com',
  instagram: 'https://www.instagram.com/rob_mcloughlin',
  twitter: 'https://twitter.com/rob_does_ux',
  linkedIn: 'https://www.linkedin.com/in/robmcloughlin-ux'
}

export const projects = {
  'The Ring Finder': 'https://ringfinder.chupi.com',
  'Digital Ring Sizer': 'https://ringsizer.chupi.com/'
}

export const faviconFrames = [
  '/favicon/frame-1.ico',
  '/favicon/frame-2.ico',
  '/favicon/frame-3.ico'
]
