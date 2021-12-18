import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" translate='no'>
        <Head>
            <meta name="google" content="notranslate" />
            <meta property="og:url" content="https:careplus.vercel.app" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Dgp covid resources | Careplus" />
            <meta property="og:description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et." />
            <meta property="og:image" content="https://thumbs.dreamstime.com/b/simple-coronavirus-covid-icon-vector-illustration-your-projects-176237979.jpg" />
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