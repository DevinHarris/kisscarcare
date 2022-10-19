import Image from 'next/image';
import Link from 'next/link';
import Layout from "../../components/Layout";
import styles from '../../styles/Services.module.css';
import bgImg from '../../public/img/bg-img-10.jpg';

export default function ServicesPage() {
    return (
        <Layout title="Our Services - Kiss Car Care">
            <div className={styles.servicesPageCont}>
            <div className={styles.serviceContainer}>
                    <div className={styles.serviceInfoCont}>
                        <div className={styles.serviceHeader}>
                            <h1 className={styles.serviceName}>Car Detail - Sedan</h1>

                        </div>
                        <div className={styles.serviceInfo}>
                            <div className={styles.serviceDescription}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur, tortor vel malesuada vehicula, nisi metus consequat orci, posuere egestas lectus velit ut neque. Morbi tristique nec libero in ultricies. Nam bibendum ante vitae vestibulum posuere. Aliquam erat volutpat. Nulla sodales nulla a turpis bibendum porta. </p>
                            </div>
                            <div className={styles.serviceDetail}>
                                <h3></h3>
                            </div>
                            <div className={styles.serviceCTAContainer}>
                                <Link href="https://calendly.com/kisscarcare/" className={styles.serviceCTA}>Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}