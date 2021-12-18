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
            <meta property="og:title" content="Dgp covid resources | Careplus" />
            <meta property="og:description" content="All necessary C-19 resosurces now at your finger tips" />
            <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
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