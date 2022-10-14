import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'
import styles from '../styles/Landing.module.css';
import bgImg from '../public/img/bg-img-5.jpg'

export default function Home() {
  return (
    <>
      <Layout title="Kiss Car Care - Keep car detailing simple.">
        <div className={styles.landingContainer}>
          <div className={styles.landingContent}>
            <div className={styles.landingMain}>
              <h1 className={styles.landingTagline}>Keep car detailing simple.</h1>
              <p className={styles.landingText}>Book one of our trained technicians and we'll come to you.</p>
            </div>
            <footer className={styles.landingFooter}>
              <nav className={styles.landingNav}>
                <ul>
                  <li className={styles.linkActive}>
                    <Link href="https://calendly.com/kisscarcare/" target="_blank">Book an Appointment</Link>
                  </li>
                  <li className={styles.footerLink}>
                    <Link href="/team">Meet Our Technicians</Link>
                  </li>
                  <li className={styles.footerLink}>
                    <Link href="/services">View Our Services</Link>
                  </li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </Layout>
    </>
  )
}