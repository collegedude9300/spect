import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function LoginPage(next) {
    return()
    {
        <>
            <main className={styles.main}>
                <title>Login</title>
                <h1>Login</h1>
                </main>
                </>
    }
}