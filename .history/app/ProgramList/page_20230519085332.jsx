import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function ProgramList() {
    return(
        <>
            <main className={styles.main}>
                <title>Program List</title>
                <h1>Program List</h1>
                <p> *ADD BUTTONS ON LIST*</p>
                <ol>
                    <li><Link href="/ProgramA">Program A</Link> </li>
                    <li><Link href="/ProgramB">Program B</Link></li>
                </ol>
                </main>
                </>
    )}