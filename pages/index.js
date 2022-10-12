import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'
import styles from '../styles/Landing.module.css';
import bgImg from '../public/img/bg-img-5.jpg'

export default function Home() {
  return (
    <>
      <Layout title="Landing.">
        <div className={styles.landingContainer}>
          <div className={styles.landingContent}>
            <div className={styles.landingMain}>
              <h1 className={styles.landingTagline}>Keep car detailing simple.</h1>
              <p className={styles.landingText}>Book one of our trained technicians and we'll come to you.</p>
            </div>
            <div className={styles.landingFooter}>
              <nav className={styles.landingNav}>
                <ul>
                  <li>
                    <a href="#">Book an appointment</a>
                  </li>
                  <li>
                    <a href="#">Meet our technicians</a>
                  </li>
                  <li>
                    <a href="#">View our services</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}