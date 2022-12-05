import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
        <Head>
            <title>OrcaSquad</title>
            <meta name="description" content=" " />
            
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header>
        </Header>

        </div>
    )
}
