"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import fs from 'fs';
import fs from 'path';
import styles from './page.module.css'
import { readdirSync } from 'fs'
export default function Home({posts}) {
  console.log(posts);
  return (
    <main className={styles.main}>
      <title>Spectrum Station School</title>
      <h1>Spectrum Station School</h1>
      <h2>Welcome to Spectrum Station School, the school for people with Autism and related disabilities.</h2>
      <h4> Attached above are two programs, A, and B, that each serve a different role in helping people with different priorities and needs</h4>
      <h4>Coming soon will be a portal that students will use to access notes from their classes and activities/assignments to help reinforce their skills</h4>
    </main>
  )
}
export async function getStaticProps() {
  const files= fs.readdirSync
  return {
    props: {
      posts: 'The Posts',
    },
  }
}