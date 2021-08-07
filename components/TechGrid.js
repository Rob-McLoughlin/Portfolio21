import Image from 'next/image'
import Link from 'next/link'

const TechGrid = ({ technologies }) => {
  const size = 48
  return (
    <ul className='flex flex-wrap gap-8 justify-center md:px-24'>
      {technologies.map(t => {
        return (
          <Link key={t.url} href={t.url}>
            <a className='group group-hover:opacity-80'>
              <li>
                <div
                  className='
                    absolute
                    block
                    -mt-2 h-16
                    -ml-2 w-16
                    rounded-full
                    z-0
                    group-hover:border-2
                    group-hover:border-dashed
                    group-hover:border-pink
                    dark:group-hover:border-0
                    dark:bg-white
                    dark:group-hover:opacity-80
                '
                />
                <Image
                  className='z-1'
                  src={t.icon}
                  height={size}
                  width={size}
                  alt={t.name}
                />
              </li>
            </a>
          </Link>
        )
      })}
    </ul>
  )
}

export default TechGrid
