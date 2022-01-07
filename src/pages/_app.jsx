import Head from 'next/head';

import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
