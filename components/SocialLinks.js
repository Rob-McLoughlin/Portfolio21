import Link from 'next/link'
import { Mail, Instagram, Twitter, LinkedIn } from './Icons'

const SocialLinks = ({ socials }) => {
  return (
    <section
      className='
      sticky
      -mx-8
      top-0
      backdrop-filter
      backdrop-blur-md
      my-8
      py-8
      bg-white
      bg-opacity-90
      z-10'
      id='social-links'
    >
      <ul className=' flex px-10 justify-evenly'>
        <li>
          <Link href={socials.mail}>
            <a>
              <Mail />
            </a>
          </Link>
        </li>
        <li>
          <Link href={socials.instagram} className='p-2'>
            <a>
              <Instagram />
            </a>
          </Link>
        </li>
        <li>
          <Link href={socials.twitter} className='p-2'>
            <a>
              <Twitter />
            </a>
          </Link>
        </li>
        <li>
          <Link href={socials.linkedIn} className='p-2'>
            <a>
              <LinkedIn />
            </a>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default SocialLinks
