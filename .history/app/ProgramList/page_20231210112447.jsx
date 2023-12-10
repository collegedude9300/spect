"use client"
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
                <VStack padding= "10">
            <Link href="/ProgramA">
                <Button backgroundColor="brand.100">  Program A: Life Skills College Integration </Button>
            </Link>
            <Link href="/ProgramB">
                <Button backgroundColor="brand.200">  Program B: Life Skills Essentials Program </Button>
            </Link>
                </VStack>
                </main>
                </>
    )}