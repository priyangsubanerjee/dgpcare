import Layout from '../components/Layout'
import '../styles/globals.css'
import { logEvent } from '../analytics/firebase'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(() => {

        logEvent('route', {
            page: router.pathname,
            date: new Date().toLocaleString(),
        })


    }, [router.pathname])

  return (

    <Layout >
        <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
