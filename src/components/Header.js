import styles from '../styles/components/Header.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {

    // SCRIPTS
    const [navOpen, setNavOpen] = useState(false);
    const [pageSize, setPageSize] = useState(0);
    
    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    useEffect(() => {
        // Open close or ignore nav
        let navClass = document.querySelector(`.navListContainer`)
        if(navOpen && window.innerWidth < 768) {
            // navClass.style.height = 'auto'
            navClass.classList.add(`${styles.navListContainerOpen}`);
            console.log('nav opened')
        } else if(!navOpen && window.innerWidth < 768) {
            // document.querySelector(`.navListContainer`).style.height = '0'
            navClass.classList.remove(`${styles.navListContainerOpen}`);
            console.log('nav closed')
        } else {
            // document.querySelector(`.navListContainer`).style.height = 'auto'
            navClass.classList.remove(`${styles.navListContainerOpen}`);
        }

        // Manage page resize state
        window.addEventListener('resize', handleResize)
        function handleResize() {
            setPageSize(window.innerWidth);
        }
        console.log(pageSize);
    }, [navOpen, pageSize]);

    return (
        <header className={`${styles.header}`}>
            <nav className={`${styles.nav} container`}>
                <div>
                    {/* LOGO */}
                    <Link className={styles.logoLink} href='../'>
                        <img className={styles.logo} src="/assets/brand/logo.svg" alt="Orca Squad Logo Icon"/>
                    </Link>
                </div>
                <div className={styles.navToggleContainer}>
                    {/* NAV TOGGLE */}
                    <button className={styles.navToggle} onClick={toggleNav}>&#9776;</button>
                </div>
                <div className={`${styles.navListContainer} navListContainer`}>
                    {/* NAVIGATION */}
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link className={styles.navLink} href="/">HOME</Link>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} target="_blank" href="/discord">JOIN</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
