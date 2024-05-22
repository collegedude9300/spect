"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function ProgramA() {
  return (
    <>
      <Head>
        <title>Program A</title>
      </Head>
      <main className={styles.main}>
        <section>
          <h1>Program A: Life Skills College Integration </h1>
          <p>
            Life Skills College Integration is a program that helps students with disabilities to integrate into college
            life. This program specifically provides students with mild to moderate special needs, such as Aspergers,
            ADHD, Sensory Processing Disorders, and other related disabilities. In addition to the designated life skills
            classes, there is also a General Educaion component that provides students with support that will help them
            transition to a four year university.
          </p>
          <h2>List of Program A Classes:</h2>
          <h4 className={styles.classHeader}> LIFE 101: Life Skills I</h4>
          <h4 className={styles.classHeader}> LIFE 102: Life Skills II</h4>
          <h4 className={styles.classHeader}> LIFE 103: Financial Skills</h4>
          <h4 className={styles.classHeader}> LIFE 104: Cooking Skills</h4>
          <h4 className={styles.classHeader}> LIFE 105: Social Skills I: Friends and Conversation</h4>
          <h4 className={styles.classHeader}> LIFE 106: Social Skills II: Dating and Relationships</h4>
          <h4 className={styles.classHeader}> LIFE 107: Life Skills Math</h4>
          <p>
            For more information about the general education curriculum, click on this General Education link below, or the
            Gened button on the header above.
          </p>
          <VStack padding="10">
            <Link href="/Gened">
              <Button backgroundColor="brand.100">Gened</Button>
            </Link>
          </VStack>
        </section>
      </main>
    </>
  );
}