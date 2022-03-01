import '../styles/styles.scss'
import {useRouter} from 'next/router';
import Layout from '../components/Layout/layout'
import * as ga from '../services/ga';
import {useEffect} from 'react';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

    return (
    <Layout>
      <Component {...pageProps} />
      </Layout>
    )
  }