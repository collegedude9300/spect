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
      <h1>Zen School</h1>
      <h2>Welcome to Spectrum Station School, the school for people with autism and related disabilities.</h2>
      <VStack padding= "10">
        <Link href="/ProgramA">
        <Button backgroundColor="brand.100"> Brand 100 Test for Program A </Button>
        </Link>
        <Link href="/ProgramA">
        <Button backgroundColor="brand.200"> Brand 200 Test for Program B </Button>
        </Link>
        </VStack>
    </main>
  )
}