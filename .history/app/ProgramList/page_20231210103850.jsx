"use client"
import Head from 'next/head';
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

export default function ProgramList() {
    const buttonBgColor = useColorModeValue('brand.100', 'brand.200');
    return(
        <>
            <main className={styles.main}>
                <Head>
                    <title>Program List</title>
                </Head>
                <h1>Program List</h1>
                <VStack padding={10}>
                    <Button as={Link} href="/ProgramA" backgroundColor={buttonBgColor}>  Program A: Life Skills College Integration </Button>
                    <Button as={Link} href="/ProgramB" backgroundColor={buttonBgColor}>  Program B: Life Skills Essentials Program </Button>
                </VStack>
            </main>
        </>
    )
}