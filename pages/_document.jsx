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
            {/* <meta property="og:site_name" content="Care Plus"></meta>
            <meta property="og:url" content="https:careplus.vercel.app" />
            <meta property="og:title" content="Dgp covid resources | Careplus" />
            <meta property="og:description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et." />
            <meta property="og:image" content="https://thumbs.dreamstime.com/b/simple-coronavirus-covid-icon-vector-illustration-your-projects-176237979.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:image:type" content="image/jpeg"/>
            <meta property="og:image:width" content="300"/>
            <meta property="og:image:height" content="300"/> */}

            <meta property="og:title" content="European Travel Destinations"/>
            <meta property="og:type" content="article" />
            <meta property="og:description" content="Offering tour packages for individuals or groups."/>
            <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg"/>
            <meta property="og:url" content="http://euro-travel-example.com/index.htm"/>
            <meta name="twitter:card" content="summary_large_image"/>
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