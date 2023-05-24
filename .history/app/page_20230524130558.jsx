"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <title>Spectrum Station School</title>
      <h1>Zen School</h1>
      <h2>Welcome to Spectrum Station School, the school for people with autism and related disabilities.</h2>
    </main>
  )
}