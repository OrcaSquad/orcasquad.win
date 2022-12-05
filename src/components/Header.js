import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <a className={styles.title} href="#">
                        OrcaSquad
                    </a>
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
                        <div className={styles.buttons}>
                            <button>Sign In</button>
                            <button>Log In</button>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

