const dev = process.env.NODE_ENV !== 'production'
const deploymentServer = ''
export const server = dev ? 'http://localhost:3000' : deploymentServer

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