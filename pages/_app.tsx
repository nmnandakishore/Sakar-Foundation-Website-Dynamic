import type { AppProps } from 'next/app';
import App from 'next/app';
import { client } from '../helpers/data-fetcher';
import Layout from '../layouts/primary-layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, programs }: AppProps & { programs: any }) {
  console.log({ programs })
  return (
    <Layout programs={programs}>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  let clientObj = client();

  const res: any = await clientObj.getEntries({
      content_type: 'programs'
  });

  return {
    ...appProps,
    programs: res?.items ?? []
  }

  // console.log({ "slugAtServerProps": context.params });

}

export default MyApp
