"use client"
import React, { useState } from 'react';
import validator from 'validator';
import Head from 'next/head'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const validateEmail = () => {
    if (!validator.isEmail(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }

  const validateName = () => {
      const trimmedName = name.trim();
      if (!validator.isLength(trimmedName, { min: 2, max: 20 }) || !validator.isAlpha(trimmedName)) {
        setNameError("Name must be between 2-20 characters, two words only, and consist of only alphabetic characters.");
        return false;
      } else {
        setNameError("");
        return true;
      }
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (validateEmail() && validateName()) {
        resetFormState();
        await submitFormToServer();
        alert("Form submitted successfully!"); 
      }
    } catch (error) {
      // Handle any errors if needed
      console.error("An error occurred during form submission:", error);
      // Update UI with error message
    } finally {
      setIsLoading(false);
    }
  }

  const resetFormState = () => {
    setEmail("");
    setName("");
    setEmailError("");
    setNameError("");
  }

  const submitFormToServer = async () => {
    // Handle form submission asynchronously with server interaction
    const response = await fetch('submitFormEndpoint', {
      method: 'POST',
      body: JSON.stringify({ email, name }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    return response.json();
  }

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
              <input type="text" name="name" id="name" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
              <br></br>
              <br></br>
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <br></br>
              <div id="email-error" role="alert" aria-live="assertive">{emailError}</div>
              <div id="name-error" role="alert" aria-live="assertive">{nameError}</div>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>Submit</button>
          </form>
        </div>
        <VStack padding="10">
          <Link href="/">
            <Button type="button" backgroundColor="brand.100">Home</Button>
          </Link>
        </VStack>
      </main>
    </div>
  )
}