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
            <meta name="description" content="Hey all, this is Team Care Plus, we provide information on necessary covid-19 supplies, from oxygen suppliers to free food home deliveries and more. We are leading from Durgapur, West bengal" />
            <meta name="keywords" content="Durgapur, dgp, durgapur, durgapurcovidresource, priyangsu, priyangsubanerjee, covid19, c19, coronavirus, covidresources, covid-19 resosurces, covid19resources, covid helplines, corona, dgpcovidresources, dgpcovidresource, west bengal" />
            <meta name="author" content="Priyangsu Banerjee" />
            <meta name="googlebot" content="index, follow" />
            <link rel="manifest" href="manifest.json" />

            <meta name="theme-color" content="rgb(255, 255, 255)" media="(prefers-color-scheme: light)"/>
            <meta name="theme-color" content="#13161f" media="(prefers-color-scheme: dark)"/>

            <meta property="og:site_name" content="Care Plus"></meta>
            <meta property="og:url" content="https:careplus.vercel.app" />
            <meta property="og:title" content="Dgp covid resources | Careplus" />
            <meta property="og:description" content="Hey all, this is Team Care Plus, we provide information on necessary covid-19 supplies, from oxygen suppliers to free food home deliveries and more. We are leading from Durgapur, West bengal" />
            <meta property="og:image" content="https://thumbs.dreamstime.com/b/simple-coronavirus-covid-icon-vector-illustration-your-projects-176237979.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:image:type" content="image/jpg"/>
            
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