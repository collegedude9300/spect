import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={styles.main}>
      <title>Zen School</title>
      <h1>Zen School</h1>
      <h2>Welcome to Zen School.</h2>
      <h3>Here you can learn about Zen.</h3>
    </main>
  )
}
