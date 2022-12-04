import React from "react";
import Head from "next/head";

const HeadSection = () => {
    return (
        <Head>
            <title>OrcaSquad</title>
            <meta name="description" content="OrcaSquad Website" />

            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

const Header = () => {
    return (
        <header>
            <h1>OrcaSquad Website</h1>
        </header>
    );
};

const Footer = () => {
    return <h3>© 2022 OrcaSquad</h3>;
};

const Layout = ({ children }) => {
    return (
        <>
            <HeadSection />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
