import Link from 'next/link'
import styles from '../styles/Nav.module.css';


export default function Nav() {
    return (
            <nav className={styles.nav}>
                <h1 className={styles.logo}>
                    <Link href="/">Kiss Car Care</Link>
                </h1>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href="/team">Our Team</Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href="/schedule">Book</Link>
                    </li>
                </ul>
            </nav>
        
    )

}