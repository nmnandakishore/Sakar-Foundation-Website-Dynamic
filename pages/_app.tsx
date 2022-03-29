import type { AppProps } from 'next/app';
import App from 'next/app';
import { client } from '../helpers/data-fetcher';
import Layout from '../layouts/primary-layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, programs, siteInfo }: AppProps & { programs: any, siteInfo: any }) {
  console.log({ siteInfo })
  return (
    <Layout programs={programs} siteInfo={siteInfo} >
      <Component {...pageProps} />
    </Layout >
  )
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  let clientObj = client();

  const res: any = await clientObj.getEntries({
    content_type: 'programs'
  });

  const res2: any = await clientObj.getEntries({
    content_type: 'siteInfo'
  });

  return {
    ...appProps,
    programs: res?.items ?? [],
    siteInfo: res2?.items ?? {}
  }

  // console.log({ "slugAtServerProps": context.params });

}

export default MyApp
