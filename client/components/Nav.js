import styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
            <nav className={styles.nav}>
                <h1 className={styles.logo}>
                    <a href="/">Kiss Car Care</a>
                </h1>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <a href="/about">About</a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="/services">Services</a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="/team">Our Team</a>
                    </li>
                </ul>
            </nav>
        
    )

}