import Head from 'next/head'
import Link from 'next/link'
import { server, socials } from '../config/index'

export async function getStaticProps () {
  const url = '/api/books'
  const res = await fetch(`${server}${url}`)
  const books = await res.json()
  return {
    props: {
      books: books
    },
    revalidate: 60 * 60 // 1 hour
  }
}

export default function Home ({ books }) {
  return (
    <>
      <Head>
        <title>Rob McLoughlin | Designer from Dublin</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='flex justify-center px-8 bg-white'>
        <main className='container max-w-2xl py-32'>
          <section id='#top' className='pt-16'>
            <h1 className='mb-4 text-h1 font-serif text-black'>
              Hi, I’m Rob McLoughlin
            </h1>
            <p className='mb-10 text-body text-black'>
              I’m a product designer building digital products at{' '}
              <Link href='https://www.wearehuman.ie/' class>
                Human
              </Link>{' '}
              and <Link href='https://www.chupi.com/'>Chupi</Link>. I work
              across the product life-cycle from strategy and research through
              design and development.
            </p>
            <p className='text-body text-black'>
              I am not very active online, but you can contact me by email,
              Instagram, Twitter or LinkedIn.
            </p>
          </section>

          <section className='py-14' id='social-links'>
            <ul className='flex px-10 justify-evenly'>
              <li>
                <Link href={socials.mail} className='p-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M22 6L12 13L2 6'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={socials.instagram} className='p-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M17.5 6.5H17.51'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={socials.twitter} className='p-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={socials.linkedIn} className='p-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6 9H2V21H6V9Z'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z'
                      stroke='#3C3C3C'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </section>

          <section id='about'>
            <h1 className='mb-4 text-h1 font-serif text-black'>About</h1>
            <p className='mb-10 text-body text-black'>
              I’ve been researching, designing and building digital products for
              5 years. I did my undergraduate in Psychology in IADT. After that,
              I did an MSc in User Experience, also in IADT.
            </p>
            <p className='mb-10 text-body text-black'>
              While I was in undergrad, I did an internship in Human. When I
              finished my undergrad, I went back and have been there since!
              During my time at Human, the majority of my work has been on
              Chupi, a global luxury jewellery company based in Ireland. In
              2021, I became the User Experience Manager at Chupi. My work there
              has included things like the Ring Finder, Digital Ring Sizer and
              our Order Tracking experiences.
            </p>
            <p className='mb-10 text-body text-black'>
              I like to read about design, I go through phases of chomping
              through books about design and business.
            </p>
            <h2 className='mb-4 text-h2 font-serif text-black'>
              Recently Read Books
            </h2>
            <p className='mb-8 text-body'>
              Pulled from my personal Notion using{' '}
              <a
                href='https://developers.notion.com/'
                target='_blank'
                rel='noreferrer'
                className='hover:text-purple-400'
              >
                their new API!
              </a>{' '}
            </p>
            <ol className='list-decimal pl-4 text-black'>
              {books.map(book => {
                return (
                  <li key={book.title} className='mb-4'>
                    <h4 className='text-h4 font-serif mb-1'>{book.title}</h4>
                    <p className='text-body'>{book.author}</p>
                  </li>
                )
              })}
            </ol>
          </section>
        </main>
      </div>
    </>
  )
}
