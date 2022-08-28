import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { projects, socials, technologies } from '@/config/index'
import SocialLinks from '@/components/SocialLinks'
import TechGrid from '@/components/TechGrid'
import { getReadBooks } from '@/lib/notion'

export async function getStaticProps () {
  const books = await getReadBooks(5)
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
      </Head>
      <div className='flex justify-center px-8 bg-white dark dark:bg-black'>
        <main className='relative container mx-auto max-w-2xl lg:max-w-xl py-48'>
          <div className='absolute rounded-full top-12 right-6 border-2 border-dashed border-black dark:border-white z-0 h-20 w-20' />
          <div className='absolute top-12 right-12 z-1'>
            <Image
              className='rounded-full'
              alt='A profile image of me in black and white'
              src='/rob_400.jpg'
              height={80}
              width={80}
            />
          </div>

          <section id='#top' className='relative mb-8'>
            <h1>Rob McLoughlin</h1>
            <p>
              I’m a product designer building digital products at{' '}
              <Link href='https://www.brownthomas.com/'>
                <a>Brown Thomas Arnotts</a>
              </Link>
              . I work across the product life-cycle from strategy and research
              through design and development. Previously, I worked at{' '}
              <Link href='https://www.wearehuman.ie/'>
                <a>Human</a>
              </Link>{' '}
              and{' '}
              <Link href='https://www.chupi.com/'>
                <a>Chupi</a>
              </Link>
              .
            </p>
            <p></p>
            <p>You can contact me by Email, Instagram, Twitter or LinkedIn.</p>
          </section>

          <SocialLinks socials={socials} />

          <section id='technologies'>
            <h1>Technologies</h1>
            <p>
              I am an experienced front-end developer. I take pride in my
              ability to deliver designs in high-quality codebases.
            </p>
            <p>
              Here are some technologies I’ve been making use of in the last six
              months in both work and personal projects:
            </p>
            <TechGrid technologies={technologies} />
          </section>

          <section id='about'>
            <h1>About</h1>
            <p>
              I’ve been researching, designing and building digital products for
              5 years. I did my undergraduate in Psychology in IADT. After that,
              I did an MSc in User Experience, also in IADT.
            </p>
            <p>
              While I was in undergrad, I did an internship in{' '}
              <Link href='https://www.wearehuman.ie/'>
                <a>Human</a>
              </Link>
              . When I finished my undergrad, I went back to Human. During my
              time at Human, the majority of my work was with{' '}
              <Link href='https://www.chupi.com/'>
                <a>Chupi</a>
              </Link>
              , a global luxury jewellery company based in Ireland. In 2021, I
              became the User Experience Manager at Chupi. My work there
              included things like{' '}
              {Object.entries(projects).map((p, index) => {
                return (
                  <span key={p[0]}>
                    <Link key={p[1]} href={p[1]}>
                      <a>{p[0]}</a>
                    </Link>
                    {index < Object.entries(projects).length - 1
                      ? ' and '
                      : index === Object.entries(projects).length - 1
                      ? ''
                      : ', '}
                  </span>
                )
              })}
              .
            </p>
            <p>
              In 2022, I joined{' '}
              <Link href='https://www.brownthomas.com/'>
                <a>Brown Thomas Arnotts</a>
              </Link>{' '}
              as a UX/UI Designer. There, I work on the digital experience
              across their online stores.
            </p>
            <h2 className='mt-10'>Recently Read Books</h2>
            <p>
              I like to read about design, I go through phases of chomping
              through books about design and business. These recently read books
              are pulled from my personal Notion using{' '}
              <a
                href='https://developers.notion.com/'
                target='_blank'
                rel='noreferrer'
              >
                their new API!
              </a>{' '}
            </p>
            <ol className='list-decimal pl-4 text-black dark:text-white'>
              {books.map(book => {
                return (
                  <li key={book.title} className='mb-4'>
                    <h3 className='text-h4 font-serif mb-1'>{book.title}</h3>
                    <p className='text-body'>{book.author}</p>
                  </li>
                )
              })}
            </ol>
          </section>

          <section className='flex justify-center mt-20'>
            <button
              onClick={() => window.scrollTo(0, 0)}
              className='text-body font-sans font-bold dark:text-white hover:text-pink'
            >
              Scroll To Top
            </button>
          </section>
        </main>
      </div>
    </>
  )
}
