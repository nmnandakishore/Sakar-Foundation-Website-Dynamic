// components/layout.js

// import Navbar from './navbar'
// import Footer from './footer'
import Head from "next/head"
import { TopMenu } from "../components/top-menu";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function Layout({ pageTitle, pageBody, children }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                <link rel="stylesheet" href="/style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css" />
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/css3-animate-it/1.0.3/css/animations.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <meta />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sākār Foundation | {pageTitle}</title>
            </Head>

            <TopMenu message={[]}></TopMenu>
            <Header></Header>
            <div className="page-body">
                {children}
                {pageBody}
            </div>
            <Footer></Footer>



            <script type="module" src="/main.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script type="module" src="/js/jquery.flexisel.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/css3-animate-it/1.0.3/js/css3-animate-it.min.js"
            ></script>
            <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

        </>
    );
}