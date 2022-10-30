import Image from 'next/image';
import Link from 'next/link';
import Helmet from 'helmet'
import Nav from '../../components/Nav';
import styles from '../../styles/Services.module.css';
import serviceImg1 from '../../public/img/service-img-1.jpg';
import serviceImg2 from '../../public/img/service-img-2.jpg';
import serviceImg3 from '../../public/img/interior-detail.jpg';
import serviceImg4 from '../../public/img/bg-img-3.jpg';

export default function ServicesPage() {
    return (
        <>
            <Helmet>
                <title>Kiss Car Care - Keep car detailing simple.</title>
            </Helmet>
            <Nav />
            <div className={styles.servicesPageCont}>
            <div className={styles.serviceContainer}>
                    <div className={styles.serviceSection}>
                        <div class={styles.serviceImageContainer}>
                            <Image layout="fill" objectFit="cover" src={serviceImg1} />
                        </div>
                        <div class={styles.serviceInfoContainer}>
                            <div class={styles.serviceInfo}>
                                <h1 className={styles.serviceInfoHeader}>Complete Detailing - Sedan</h1>
                                <p className={styles.serviceInfoDesc}>
                                    Proin eget porttitor diam, sed consequat erat. Donec id placerat eros. Curabitur congue, orci et commodo fringilla, justo eros tincidunt eros, in auctor turpis lorem id elit. Donec mi lectus, sagittis tristique magna ac, malesuada convallis enim. Curabitur mollis, mauris vitae consectetur porttitor, enim metus rutrum enim, sed laoreet leo eros et nunc.
                                </p>
                                <div className={styles.serviceDetails}>
                                    <h1 className={styles.serviceDetailsHeader}>About this service</h1>
                                    <div className={styles.serviceDetailsContainer}>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    $150
                                                </h1>
                                                <span className={styles.serviceName}>Price</span>
                                            </div>
                                        </div>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    *Typically 2hrs
                                                </h1>
                                                <span className={styles.serviceName}>Est. Time</span>
                                            </div>
                                        </div>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    $150
                                                </h1>
                                                <span className={styles.serviceName}>Price</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.serviceListCont}>
                                        <h1>Service Features</h1>

                                        <ul className={styles.serviceFeatures}>
                                            <li>Wash</li>
                                            <li>Wax</li>
                                            <li>Full Interior Detail</li>
                                        </ul>
                                    </div>
                                    <div className={styles.serviceCTACont}>
                                        <Link href="/schedule">
                                            <a className={styles.serviceBtn}>Continue to Scheduling</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceSection}>
                        <div class={styles.serviceImageContainer}>
                            <Image layout="fill" objectFit="cover" src={serviceImg2} />
                        </div>
                        <div class={styles.serviceInfoContainer}>
                            <div class={styles.serviceInfo}>
                                <h1 className={styles.serviceInfoHeader}>Complete Detailing - SUV</h1>
                                <p className={styles.serviceInfoDesc}>
                                    Proin eget porttitor diam, sed consequat erat. Donec id placerat eros. Curabitur congue, orci et commodo fringilla, justo eros tincidunt eros, in auctor turpis lorem id elit. Donec mi lectus, sagittis tristique magna ac, malesuada convallis enim. Curabitur mollis, mauris vitae consectetur porttitor, enim metus rutrum enim, sed laoreet leo eros et nunc.
                                </p>
                                <div className={styles.serviceDetails}>
                                    <h1 className={styles.serviceDetailsHeader}>About this service</h1>
                                    <div className={styles.serviceDetailsContainer}>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    $250
                                                </h1>
                                                <span className={styles.serviceName}>Price</span>
                                            </div>
                                        </div>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    *Typically 3hrs
                                                </h1>
                                                <span className={styles.serviceName}>Est. Time</span>
                                            </div>
                                        </div>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    $150
                                                </h1>
                                                <span className={styles.serviceName}>Price</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.serviceListCont}>
                                        <h1>Service Features</h1>

                                        <ul className={styles.serviceFeatures}>
                                            <li>Wash</li>
                                            <li>Wax</li>
                                            <li>Full Interior Detail</li>
                                        </ul>
                                    </div>
                                    <div className={styles.serviceCTACont}>
                                        <Link href="/schedule">
                                            <a className={styles.serviceBtn}>Continue to Scheduling</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceSection}>
                        <div class={styles.serviceImageContainer}>
                            <Image layout="fill" objectFit="cover" src={serviceImg3} />
                        </div>
                        <div class={styles.serviceInfoContainer}>
                            <div class={styles.serviceInfo}>
                                <h1 className={styles.serviceInfoHeader}>Complete Mold Removal</h1>
                                <p className={styles.serviceInfoDesc}>
                                    Proin eget porttitor diam, sed consequat erat. Donec id placerat eros. Curabitur congue, orci et commodo fringilla, justo eros tincidunt eros, in auctor turpis lorem id elit. Donec mi lectus, sagittis tristique magna ac, malesuada convallis enim. Curabitur mollis, mauris vitae consectetur porttitor, enim metus rutrum enim, sed laoreet leo eros et nunc.
                                </p>
                                <div className={styles.serviceDetails}>
                                    <h1 className={styles.serviceDetailsHeader}>About this service</h1>
                                    <div className={styles.serviceDetailsContainer}>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    $500-900
                                                </h1>
                                                <span className={styles.serviceName}>Price</span>
                                            </div>
                                        </div>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    *Typically 3hrs
                                                </h1>
                                                <span className={styles.serviceName}>Est. Time</span>
                                            </div>
                                        </div>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    $150
                                                </h1>
                                                <span className={styles.serviceName}>Price</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.serviceListCont}>
                                        <h1>Service Features</h1>

                                        <ul className={styles.serviceFeatures}>
                                            <li>Wash</li>
                                            <li>Wax</li>
                                            <li>Full Interior Detail</li>
                                        </ul>
                                    </div>
                                    <div className={styles.serviceCTACont}>
                                        <Link  href="/schedule">
                                            <a className={styles.serviceBtn}>Continue to Scheduling</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceSection}>
                        <div class={styles.serviceImageContainer}>
                            <Image layout="fill" objectFit="cover" src={serviceImg4} />
                        </div>
                        <div class={styles.serviceInfoContainer}>
                            <div class={styles.serviceInfo}>
                                <h1 className={styles.serviceInfoHeader}>Basic Buffing</h1>
                                <p className={styles.serviceInfoDesc}>
                                    Proin eget porttitor diam, sed consequat erat. Donec id placerat eros. Curabitur congue, orci et commodo fringilla, justo eros tincidunt eros, in auctor turpis lorem id elit. Donec mi lectus, sagittis tristique magna ac, malesuada convallis enim. Curabitur mollis, mauris vitae consectetur porttitor, enim metus rutrum enim, sed laoreet leo eros et nunc.
                                </p>
                                <div className={styles.serviceDetails}>
                                    <h1 className={styles.serviceDetailsHeader}>About this service</h1>
                                    <div className={styles.serviceDetailsContainer}>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    $450-800
                                                </h1>
                                                <span className={styles.serviceName}>Price</span>
                                            </div>
                                        </div>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    *Typically 3hrs
                                                </h1>
                                                <span className={styles.serviceName}>Est. Time</span>
                                            </div>
                                        </div>
                                        <div className={styles.serviceItem}>
                                            <div className={styles.serviceItemHeading}>
                                                <h1 className={styles.serviceMeta}>
                                                    $150
                                                </h1>
                                                <span className={styles.serviceName}>Price</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.serviceListCont}>
                                        <h1>Service Features</h1>

                                        <ul className={styles.serviceFeatures}>
                                            <li>Wash</li>
                                            <li>Wax</li>
                                            <li>Full Interior Detail</li>
                                        </ul>
                                    </div>
                                    <div className={styles.serviceCTACont}>
                                        <Link  href="/schedule">
                                            <a className={styles.serviceBtn}>Continue to Scheduling</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}