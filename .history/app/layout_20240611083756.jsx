'use client'
import './globals.css'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Poppins } from 'next/font/google';
import Header from './components/Header';
const customTheme= extendTheme({
  colors:{
    brand:{
      100: "#e57373",
      200: "#01ca00",
      300: "#f7fafc",
  },
},    
});
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header/>
      <CacheProvider>
      <ChakraProvider theme= {customTheme}>
        {children}
      </ChakraProvider>
      </CacheProvider>
        </body>
    </html>
  );
}
