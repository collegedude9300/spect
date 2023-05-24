'use client'
import './globals.css'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Poppins } from 'next/font/google';
import Header from './components/Header';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
      </CacheProvider>
        </body>
    </html>
  );
}
