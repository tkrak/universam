import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="shortcut icon" href="/public/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"/>
            <link rel="manifest" href="/public/site.webmanifest"/>
            <title>Universam</title>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
