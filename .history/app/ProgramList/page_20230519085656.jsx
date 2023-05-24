"use client"
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
                <VStack padding= "10">
            <Link href="/ProgramA">
                <Button backgroundColor="brand.100">  Program A </Button>
            </Link>
            <Link href="/ProgramA">
                <Button backgroundColor="brand.200">  Program B </Button>
            </Link>
                </VStack>
                </main>
                </>
    )}