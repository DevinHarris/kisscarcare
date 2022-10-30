import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import profileImg1 from '../../public/img/profile-1.jpg';
import profileImg2 from '../../public/img/profile-2.jpg';
import profileImg3 from '../../public/img/profile-3.jpg';

import styles from '../../styles/OurTeam.module.css';

export default function TeamPage() {

    return (
        <Layout title="Our Team - Kiss Car Care">
            <div className={styles.ourTeamPage}>
                <div class={styles.teamPageHeader}>
                    <h1 className={styles.teamPageHeading}>Meet our Team</h1>
                    <p className={styles.teamPageDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis interdum nisi tristique commodo. Aenean elementum consectetur erat, ut cursus sapien congue sit amet. In imperdiet mi ut ligula sodales tempus. Phasellus dapibus urna tincidunt felis lacinia, sit amet mollis libero fermentum.</p>
                </div>
                <div className={styles.teamMembers}>
                    <div className={styles.teamMember}>
                        <Link href="/team/chris">
                            <Image src={profileImg1} className={styles.profileImg} />
                        </Link>
                        <h1 className={styles.teamMemberName}>Christopher Bridges</h1>
                        <div className={styles.teamMemberDesc}>
                            <span className={styles.teamTitle}>Lead Detailer and Co-Founder</span>
                            <span className={styles.teamMemberYears}>7 Years of Experience</span>
                            <Link href="/team/chris">
                                <a className={styles.teamBioLink}>View Bio</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                       <Link href="/team/devonta">
                            <Image src={profileImg2} className={styles.profileImg}/>
                       </Link>
                        <h1 className={styles.teamMemberName}>Devonta Harris</h1>
                        <div className={styles.teamMemberDesc}>
                            <span className={styles.teamTitle}>Lead Software Engineer</span>
                            <span className={styles.teamMemberYears}>7 Years of Experience</span>
                            <Link href="/team/devonta">
                                <a className={styles.teamBioLink}>View Bio</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}