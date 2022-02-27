import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Outfit:300,400,600,700&amp;lang=en" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:300,400,600,700&amp;lang=en" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument