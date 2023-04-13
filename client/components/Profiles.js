import Image from 'next/image';
import { FaFacebookSquare,  } from 'react-icons/fa';
import chrisProfile from '../public/img/chris.jpg';
import styles from '../styles/Profiles.module.css';

export default function Profiles() {
    return (
        <>
            <div className={styles.profileContainer}>
                <div className={`${styles.profileCol} ${styles.profileColMeta}`}>
                    <div className={styles.profileImgContainer}>
                        <Image className={styles.profileImg} src={chrisProfile}/>
                    </div>
                    <div className={styles.profileCTA}>
                            <div className={styles.profileSocial}>
                                <ul className={styles.profileSocialLinks}>
                                    <li className={styles.profileSocialLink}>
                                        <a href="#">
                                            <FaFacebookSquare />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.profileBookingCont}>
                                <a href="#" className={styles.profileBookingLink}>Book Chris</a>
                            </div>
                        </div>
                </div>
                <div className={`${styles.profileCol} ${styles.profileColBio}`}>
                    <div className={styles.profileBioHeader}>
                        <h1>Chris Bridges</h1>
                    </div>
                    <div className={styles.profileBioCont}>
                        <p>Duis non lacus lorem. Phasellus dapibus viverra aliquam. Nullam eu tincidunt erat. Maecenas eu ligula sed magna ultricies scelerisque. Nam maximus ultrices laoreet. Pellentesque efficitur, ex et interdum rhoncus, quam mauris commodo sem, sit amet tincidunt diam arcu id odio. Nam ut interdum sapien.
                
                        </p>

                        <p>Proin elementum lobortis convallis. Suspendisse euismod nulla justo, in viverra quam fermentum sed. Suspendisse tempus velit sit amet condimentum porta. Vestibulum lorem nulla, accumsan eu tristique sed, laoreet quis ex. Ut tempor aliquet egestas. Aliquam finibus massa malesuada sollicitudin accumsan.</p>

                        <p>Pellentesque interdum, sapien ut tincidunt tincidunt, nulla ligula feugiat dolor, vel imperdiet nibh metus id orci. Vivamus cursus in ante a varius. Etiam iaculis id orci a luctus.</p>
                    </div>
                </div>
            </div>
        </>
    )
}