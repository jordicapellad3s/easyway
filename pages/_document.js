import Footer from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://emojicdn.elk.sh/🪄" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
