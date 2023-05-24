import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function ProgramA()
{
    return (
        <>
            <Head>
                <title>Program A</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href={inter}/>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Program A
                </h1>
    <p> Life Skills College Integration is a program that helps students with disabilities to integrate into college life.
    This program specifically provides students with mild to moderate special needs, such as Aspergers, ADHD, Sensory Processing Disorders, and other related disabilities.
   In addition to the designated life skills classes, there is also a General Educaion component that provides students with
   support that will help them transition to a four year university.</p>
   <p> For more information about the general education curriculum and life skills classes, click on this General Education link below.</p>  

            </main>
        </>
    )
}