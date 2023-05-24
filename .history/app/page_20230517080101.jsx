import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={styles.main}>
      <title>Spectrum Station School</title>
      <h1>Zen School</h1>
      <p>Welcome to Spectrum Station School, the school for people with autism and related disabilities.</p>
    </main>
  )
}