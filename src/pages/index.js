import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
        <Head>
            {/* SEARCH ENGINE RELATIVE META */}
            <title>Orca Squad</title>
            <meta name="description" content="Join Orca Squad, one of the leading Global Hack Week Guilds with Major Leagu Hacking (MLH)"/>
            
            {/* OPEN GRAPH META */}
            <meta property="og:title" content="Orca Squad"/>
            <meta property="og:description" content="Join Orca Squad, one of the leading Global Hack Week Guilds with Major Leagu Hacking (MLH)"/>
            <meta property="og:image" content=" "/>
            <meta property="og:url" content="https://orcasquad.win"/>
            <meta property="og:site_name" content="Orca Squad"/>
            <meta property="og:type" content="website"/>

            {/* TWITTER META */}
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@immattdavison"/>
            <meta name="twitter:title" content="Orca Squad"/>
            <meta name="twitter:description" content="Join Orca Squad, one of the leading Global Hack Week Guilds with Major Leagu Hacking (MLH)"/>
            <meta name="twitter:image" content=" "/>

            {/* FAVICON */}
            <link rel="icon" href="/favicon.ico" />

        </Head>
        <Header>
        </Header>

        </div>
    )
}
