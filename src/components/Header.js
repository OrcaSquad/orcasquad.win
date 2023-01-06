import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <Image
                            src="/assets/logo.svg"
                            alt="OrcaSquad Logo"
                            width={150}
                            height={100}
                        />
                        <a className={styles.title} href="#">
                            OrcaSquad
                        </a>
                    </div>
                    <nav className={styles.nav}>
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
        </div>
    );
}

