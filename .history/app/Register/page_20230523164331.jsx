"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function SignUp()
{
//validate Email
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-1]\d{1,2}\.[0-1]\d{1,2}\.[0-1]\d{1,2}\.[0-1]\d{1,2}\])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//validate First Name
const validateName = (name) => {
  const re = /^[A-Z][a-z]+(\s|,)[A-Z][a-z]{1,19}$/;
  return re.test(String(name));
}
//validate Phone Number
const validatePhoneNumber = (phoneNumber) => {
  const re = /^\d{10}$/;
  return re.test(String(phoneNumber));
}
//validate Address
const validateAddress = (address) => {
  const re = /^[0-9a-zA-Z\s,.'-]{3,}$/;
  return re.test(String(address));
}
//validate City
const validateCity = (city) => {
  const re = /^[a-zA-Z\s,.'-]{3,}$/;
  return re.test(String(city));
}
//validate Zip Code
const validateZipCode = (zipCode) => {
  const re = /^\d{5}$/;
  return re.test(String(zipCode));
}
//validate Date of Birth
const validateDateOfBirth = (dateOfBirth) => {
  const re = /^\d{4}-\d{2}-\d{2}$/;
  return re.test(String(dateOfBirth));
}
//check to see if the email is valid
const handleSubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zipCode").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  if (!validateEmail(email) && !validateName(name) && !validatePhoneNumber(phoneNumber) && !validateAddress(address) && !validateCity(city) && !validateZipCode(zipCode) ) {
    alert("Error: form not accurate.");
  }
  else if (!validateName(name)) {
    alert("Please enter a valid name");
  }
  else if (!validateEmail(email)) {
    alert("Please enter a valid email");
  }
  else if (!validatePhoneNumber(phoneNumber)) {
    alert("Please enter a valid phone number");
  }
  else if (!validateAddress(address)) {
    alert("Please enter a valid address");
  }
  else if (!validateCity(city)) {
    alert("Please enter a valid city");
  }
  else if (!validateZipCode(zipCode)) {
    alert("Please enter a valid zip code");
  }
  else if (!validateDateOfBirth(dateOfBirth)) {
    
    alert("Please enter a valid date of birth");
  }
  else {
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zipCode").value = "";
    document.getElementById("dateOfBirth").value = "";
    alert("Thank you for signing up!");
  }
}
return ( 
  <div className={styles.container}>
    <Head>
      <title>Sign Up</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter full name" required/>
        </div>
        <div className="form-group"> 
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" required/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter address" required/>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter city" required/>
        </div>
        <div className="form-group">
          <label htmlFor="state">State (select below)</label>
          <select className="form-control" id="state">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input type="text" className="form-control" id="zipCode" placeholder="Enter zip code" required/>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="date" className="form-control" id="dateOfBirth"  min="1923-01-02" max= "2023-06-22"placeholder="Enter date of birth" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </main>
      <Link  href="/"> </Link>
      
  </div>
)}
