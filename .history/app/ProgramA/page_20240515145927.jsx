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
          <h4 className={styles.header}>Life Skills 102: LIFE 101: Life Skills I</h4>
          <h4 className={styles.header}>Life Skills 102: LIFE 102: Life Skills II</h4>
          <h4 className={styles.header}>Life Skills 103: LIFE 103: Financial Skills</h4>
          <h4 className={styles.header}>Life Skills 104: LIFE 104: Cooking Skills</h4>
          <h4 className={styles.header}>Life Skills 105: LIFE 105: Social Skills</h4>
          <h5>Unit 1: All About Making Friends</h5>
          <ul>
            <li>different types of friends</li>
            <li>how to be a good friend (and watching for red flags too)</li>
            <li>privacy circle and topics of conversation for each</li>
          </ul>
          <h5>Unit 2: The Art of Conversation</h5>
          <ul>
            <li>how to start a conversation</li>
            <li>maintaing a conversation</li>
            <li>how to end a conversation</li>
            <li>how to read body language and social cues (types of cues)</li>
            <li>how to maintain and recognize your own body language and social cues</li>
          </ul>
          <h5>Unit 3: Hidden Curriculum and Friendships</h5>
          <ul>
            <li>expected vs unexpected behaviours for maintaing friendship</li>
            <li>how to read body language and social cues (types of cues)</li>
            <li>how to maintain and recognize your own body language and social cues</li>
            <li>how to deal with conflict resolution</li>
          </ul>
          <h5>Unit 4: Being Prepared for Dating</h5>
          <ul>
            <li>self-assessment, and character traits</li>
            <li>concepts of dating and components</li>
            <li>review on how to start, maintain, and end conversations</li>
            <li>how to ask someone out, and responses, and what to do</li>
            <li>dating ideas</li>
            <li>review on body language and social cues (types of cues)</li>
            <li>how to maintain and recognize your own body language and social cues</li>
            <li>types of dating, and dating safety</li>
            <li>different stages of relationships</li>
            <li>dealing with breakups and rejection</li>
          </ul>
          <h5>Unit 5: Health and Safety</h5>
          <ul>
            <li>self advocacy</li>
            <li>understanding emergency services and how to use them</li>
            <li>responding to police when pulled over, or stopped</li>
            <li>fire safety</li>
            <li>fire tools and how to use them</li>
            <li>safe activities list</li>
            <li>how and when to ask for help</li>
            <li>how to respond to bullying, and harassment</li>
            <li>managing your emotions</li>
            <li>scheduling medical appointments</li>
          </ul>
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