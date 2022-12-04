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
            <div className="wrapper">
                <a href="#">OrcaSquad</a>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Discord</a>
                        </li>
                    </ul>
                </nav>
            </div>
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
