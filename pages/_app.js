import '../styles/globals.css'
import Head from "next/head"
import { TopMenu } from "../components/top-menu";
import Layout from '../layouts/primary-layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
export default MyApp



