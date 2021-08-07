import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { projects, server, socials } from '../config/index'
import SocialLinks from '../components/SocialLinks'

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
        <main className='relative container mx-auto max-w-2xl lg:max-w-xl py-32'>
          <div className='absolute top-12 right-12'>
            <Image
              className='rounded-full'
              src='/rob-linkedin.jpeg'
              height={64}
              width={64}
            />
          </div>
          <section id='#top' className='relative'>
            <h1 className='mb-4 text-h1 font-serif text-black'>
              Hi, I’m Rob McLoughlin
            </h1>
            <p className='mb-10 text-body text-black'>
              I’m a product designer building digital products at{' '}
              <Link href='https://www.wearehuman.ie/'>
                <a className='font-bold'>Human</a>
              </Link>{' '}
              and{' '}
              <Link href='https://www.chupi.com/'>
                <a className='font-bold'>Chupi</a>
              </Link>
              . I work across the product life-cycle from strategy and research
              through design and development.
            </p>
            <p className='text-body text-black'>
              I am not very active online, but you can contact me by email,
              Instagram, Twitter or LinkedIn.
            </p>
          </section>

          <SocialLinks socials={socials} />

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
              has included things like{' '}
              {Object.entries(projects).map((p, index) => {
                return (
                  <span key={p[0]}>
                    <Link key={p[1]} href={p[1]}>
                      <a className='font-bold'>{p[0]}</a>
                    </Link>
                    {index < Object.entries(projects).length - 1
                      ? ' and '
                      : index == Object.entries(projects).length - 1
                      ? ''
                      : ', '}
                  </span>
                )
              })}
              .
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

          <section className='flex justify-center mt-20'>
            <button
              onClick={() => window.scrollTo(0, 0)}
              className='text-body font-sans underline'
            >
              Scroll To Top
            </button>
          </section>
        </main>
      </div>
    </>
  )
}
