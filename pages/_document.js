import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon/frame-1.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap'
            rel='stylesheet'
          />
          <meta
            name='description'
            content='Rob McLoughlin is a designer and developer from Dublin, Ireland. Currently UX/UI Developer at Human 💻 and the UX Manager at Chupi 💍.'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
