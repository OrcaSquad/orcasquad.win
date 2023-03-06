import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

    const meta = {
        title: 'Orca Squad',
        description: 'Join Orca Squad, one of the leading Global Hack Week Guilds with Major League Hacking (MLH)',
        image: 'https://orcasquad.win/assets/logo.png',
        url: 'https://orcasquad.win',
        site_name: 'Orca Squad',
    }

    return (
        <>
            <Head>
                {/* BROWSER RELATIVE META */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

                {/* SEARCH ENGINE RELATIVE META */}
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>

                {/* OPEN GRAPH META */}
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:image" content={meta.image}/>
                <meta property="og:url" content={meta.url}/>
                <meta property="og:site_name" content={meta.site_name}/>
                <meta property="og:type" content="website"/>

                {/* TWITTER META */}
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@immattdavison"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                <meta name="twitter:image" content={meta.image}/>

                {/* FAVICON */}
                <link rel="icon" href="/assets/brand/favicon/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
