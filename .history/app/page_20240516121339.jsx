"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <title>Spectrum Station School</title>
      <h1>Spectrum Station School</h1>
      <h2>Welcome to Spectrum Station School, the school for people with Autism and related disabilities.</h2>
      <h3> Attached above are two programs, A, and B, that each serve a different role in helping people with different priorities and needs</h3>

    </main>
  )
}