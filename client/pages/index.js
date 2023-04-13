import Head from 'next/head'
import Image from 'next/image'
import { Helmet } from 'react-helmet';
import Link from 'next/link';
import Layout from '../components/Layout'
import Nav from '../components/Nav';
// import styles from '../styles/Home.module.css'
import styles from '../styles/Landing.module.css';
import bgImg from '../public/img/bg-img-14.jpg'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kiss Car Care - Keep car detailing simple.</title>
      </Helmet>
      <Nav />
        <div className={styles.landingHero}>
          <div className={styles.landingContent}>
            <div className={styles.landingMain}>
              <div>
                <h1 className={styles.landingTagline}>Keep car detailing simple.</h1>
                <p className={styles.landingText}>Book one of our trained technicians and we'll come to you.</p>
              </div>

              <div className={styles.landingCTA}> 
                <Link href="/schedule" target="_blank">
                  <a className={styles.linkActive}>Book an Appointment</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.landingSection}>
            <div className={styles.landingSectionHeading}>
                <h1 className={styles.landingSectionHeader}>Convenience right to your drive-way</h1>
                <p className={styles.landingSectionSubHeading}>Here's what makes us different.</p>
            </div>
            <div className={styles.landingSectionMain}>
              
            </div>
        </div> */}
    </>
  )
}