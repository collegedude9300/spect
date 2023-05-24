"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './page.module.css'
export default function Home() {
  return (
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossOrigin="anonymous"
    />
  </Head>
    <main className={styles.main}>
      <title>Spectrum Station School</title>
      <h1>Zen School</h1>
      <h2>Welcome to Spectrum Station School, the school for people with autism and related disabilities.</h2>
    </main>
  )
}