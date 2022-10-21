import Head from 'next/head';
import Nav from './Nav';
import styles from '../styles/Layout.module.css';

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="/image/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <div className={styles.layoutContainer}>
                { children }
            </div>
        </>
    )
}