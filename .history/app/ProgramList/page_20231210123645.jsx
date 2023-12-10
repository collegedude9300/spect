"use client"
import Head from 'next/head';
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
const programData = [
    { name: 'Program A: Life Skills College Integration', link: '/ProgramA', backgroundColor: 'brand.100' },
    { name: 'Program B: Life Skills Essentials Program', link: '/ProgramB', backgroundColor: 'brand.200' }
]

export default function ProgramList() {
    try {
        return(
            <>
                <Head>
                    <title>Program List</title>
                </Head>
                <main className={styles.main}>
                    <h1>Program List</h1>
                    <VStack padding= "10">
                        {programData.map(program => (
                            <Link key={program.link} href={program.link}>
                                <Button backgroundColor={program.backgroundColor}>{program.name}</Button>
                            </Link>
                        ))}
                    </VStack>
                </main>
            </>
        )}
    catch (error) {
        // Handle the error here
        console.error(error);
        // Render an error message or fallback UI
        return <p>Oops! Something went wrong.</p>;
    }
}