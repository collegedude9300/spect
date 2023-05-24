"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Login() {
    const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-1]\d{1,2}\.[0-1]\d{1,2}\.[0-1]\d{1,2}\.[0-1]\d{1,2}\])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const validateName = (name) => {
    const re = /^[A-Z][a-z]+(\s|,)[A-Z][a-z]{1,19}$/;
    return re.test(String(name));
  }
//check to see if the email is valid
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    if (!validateEmail(email) && !validateName(name)) 
    {
      alert("Please enter both a valid email address and name.");
    }
    else if (!validateEmail(email)) {
      alert("Please enter a valid email address");
    }
    else if (!validateName(name)) {
      alert("Please enter a valid name. The name must be two words only.");
    }
    else 
    {
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      alert("Form submitted successfully");
    }
  }
//check to see if the email is valid
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.login}>
        <h1 className={styles.title}>
          Contact Me:
        </h1>
        <div className={styles.grid}>
            <form onSubmit={handleSubmit}>
            <br></br>
              <div className="form-group">
              <label htmlFor="name">Full Name</label>
			<input type="text" name="name" id="name" placeholder=""/> 
      <br></br>
      <br></br>
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                <br></br>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <VStack padding= "10">
            <Link href="/">
                <Button backgroundColor="brand.100">  Home</Button>
            </Link>
                </VStack>
      </main>
      </div>
  )}    