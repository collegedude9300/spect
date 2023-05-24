"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function ProgramA()
{
    return (
        <>
            <main className={styles.main}>
                <title>Program A</title>
            <h1>Program A: Life Skills College Integration </h1>
    <p> Life Skills College Integration is a program that helps students with disabilities to integrate into college life.
    This program specifically provides students with mild to moderate special needs, such as Aspergers, ADHD, Sensory Processing Disorders, and other related disabilities.
   In addition to the designated life skills classes, there is also a General Educaion component that provides students with
   support that will help them transition to a four year university.</p>
<h2>List of Program A Classes:</h2>
   <h5>Unit 1:     Job/Career Tips I</h5>
  <ul>
        <li> Resume basics: how to structure your resume, category location, etc </li>
        <li>Cover Letter basics: how to structure your cover letter, writing an effective cover letter, etc</li>
        <li>career assessments  </li>
  </ul>
  <h5>       Unit 2:    Medical Basics I </h5>
  <ul>
        <li> health and hygene   </li>
        <li> diffrerent types of insurance   </li>
        <li> how to schedule and find a doctor   </li>
        <li> basics of health insurance  </li>
  </ul>
  <h5>Unit 3: Taxes and Insurance</h5>
  <ul>
        <li> basics of taxes </li>
        <li>Different forms </li>
        <li> how to figure out your income tax </li>
        <li> how to file taxes  </li>
        <li> diffrerent ways to schedule your tax return </li>
  </ul>
  <h5>Unit 4: Driving Tips</h5>
  <ul>
        <li> permit tips </li>
        <li>liscnese tips </li>
        <li>basics of a drivers liscnese  </li>
        <li> how to renew/replace your license  </li>
  </ul>
  <h5>Unit 5: Cleaning</h5>
  <ul>
        <li> how to get some cleaning supplies </li>
        <li>essential areas where cleaning is needed </li>
        <li>how to do laundry   </li>
        <li> how to make your bed and change your sheets  </li>
        <li>available services and how to use them </li>
  </ul>
  <h5>Unit 6: Shopping and Budgeting</h5>
  <ul>
        <li> tips on successful shopping </li>
        <li>nutrition basics </li>
        <li> different types of shopping and tips for each   </li>
        <li> different types of grocery stores  </li>
        <li>other essential shopping stores </li>
  </ul>
  <h5>Unit 7: Cooking Basics</h5>
  <ul>
        <li> instruction terminology </li>
        <li> measurements </li>
        <li>nutrition basics  </li>
        <li>tools and what they mean </li>
  </ul>
  <h4 className={styles.header}>Life Skills 102: LIFE 102: Life Skills II </h4>
  <h5>Unit 1:     Job/Career Tips II</h5>
  <ul>
        <li> how to tailor your resume to the right category  </li>
        <li> interview prep skills and tips </li>
        <li> advanced job tips(networking, benefits of short term and long term, etc) </li>
  </ul>
  <h5>       Unit 2: Medical Basics II </h5>
  <ul>
        <li> coverage on insurance </li>
        <li>how to fill a perscrpition </li>
        <li> ppo vs hmo </li>
  </ul>
  <h5>Unit 3: Taxes and Insurance II </h5>
  <ul>
        <li> credit card </li>
        <li>credit score </li>
        <li> types of loans </li>
        <li> investing  </li>
        <li> debit cards </li>
  </ul>
  <h5>Unit 4: Nutrition basics      </h5>
  <ul>
        <li> food pyramid and tips for dieting </li>
        <li> scientic terms and how they relate to dieting (carbs, dieting, fats, fiber)</li>
        <li> vitamins and meaning </li>
        <li> how to read a food label </li>
        <li> processed food vs natural food</li>
  </ul>
  <h4 className={styles.header}>Life Skills 103: LIFE 103: Financial Skills </h4>
  <h5>Unit 1: Budgeting </h5>
  <ul>
        <li>budgeting basics and relevance  </li>
        <li>income basics (def, tax, types) </li>
        <li> types of spending </li>
        <li> how to make a budget </li>
  </ul>
  <h5>       Unit 2: Rent/Utilities  </h5>
  <ul>
            <li> basics </li>
            <li> types of rent </li>
            <li> types of utilities </li>
            <li> renting vs owning </li>
            <li> how to get a renters license </li>
            <li> transfer utilities </li>
            <li> setting up transfer </li>
            <li> how to pay utilities </li>
  </ul>
  <h5>Unit 3: Vehicle Maintenance </h5>
  <ul>
        <li> DMV registration</li>
        <li>smog testing </li>
        <li> types of maitenence (oil, tire, car wash, serious fixes, brakes) </li>
        <li>parts of an engine   </li>
  </ul>
  <h5>Unit 4: Income Taxes </h5>
  <ul>
      <li> basics of taxes </li>
      <li> determining your income taxes </li>
      <li> how to file taxes </li>
      <li>different forms (W2, 1099, etc) </li>
      <li>filing options </li>
      <li> extensions  </li>
  </ul>
  <h4 className={styles.header}>Life Skills 104: LIFE 104: Cooking Skills </h4>
  <h5>Unit 1: Nutrition basics      </h5>
  <ul>
        <li> food pyramid and tips for dieting </li>
        <li> scientic terms and how they relate to dieting (carbs, dieting, fats, fiber)</li>
        <li> vitamins and meaning </li>
      <li> how to read a food label </li>
      <li> processed food vs natural food</li>
  </ul>
  <h5>       Unit 2: Recipie Basics  </h5>
  <ul>
        <li> Recipe tips </li>
        <li> instruction terminology </li>
        <li> measurements </li>
        <li> tools and what they mean   </li>
        <li> low vs high heat </li>
  </ul>
  <h5>Unit 3:  safety and food handlers</h5>
  <ul>
        <li> how to get a license </li>
        <li> hygene essentials  </li>
        <li> how to properly use and maintain kitchen tools</li>
        <li> different types of foodbourne illnesses and how to prevent them</li>
        <li> how to properly use and maintain silverwear</li>
        <li> food temperatures  (meats, dairy, etc)</li>
  </ul>
  <h5>Unit 4: Shopping and food basics </h5>
  <ul>
        <li> shelf life and expiration dates</li>
        <li>grocery shopping 101: isles, different stores, lists </li>
        <li> health benefits of foods  </li>
        <li> best foods for preventative health   </li>
  </ul>
      <h4 className={styles.header}>Life Skills 105: LIFE 105: Social Skills </h4>
      <h5>Unit 1: All About Making Friends      </h5>
      <ul>
        <li> different types of friends</li>
        <li>how to be a good friend (and watching for red flags too) </li>
        <li> privacy circle and topics of conversation for each  </li>
       </ul>
      <h5>   Unit 2: The Art of Conversation </h5>
      <ul>
            <li> how to start a conversation</li>
            <li>maintaing a conversation </li>
            <li> how to end a conversation </li>
            <li> how to read body language and social cues (types of cues) </li>
            <li> how to maintain and recognize your own body language and social cues</li>
       </ul>
      <h5>Unit 3:  Hidden Curriculum and Friendships</h5>
      <ul>
            <li> expected vs unexpected behaviours for maintaing friendship </li>
            <li> how to read body language and social cues (types of cues) </li>
            <li> how to maintain and recognize your own body language and social cues</li>
            <li> how to deal with conflict resolution </li>
            </ul>
      <h5>Unit 4: Being Prepared for Dating </h5>
      <ul>
            <li> self-assessment, and character traits </li>
            <li> concepts of dating and components  </li>
            <li> review on how to start, maintain, and end conversations</li>
            <li> how to ask someone out, and responses, and what to do </li>
            <li> dating ideas </li>
            <li> review on body language and social cues (types of cues) </li>
            <li> how to maintain and recognize your own body language and social cues</li>
            <li> types of dating, and dating safety </li>
            <li> different stages of relationships </li>
            <li> dealing with breakups and rejection </li>
      </ul>
            <h5>Unit 5: Health and Safety </h5>
            <ul>
                 <li> self advocacy </li>
                 <li>understanding emergency services and how to use them</li>
                 <li> responding to police when pulled over, or stopped</li>
                 <li> fire safety</li>
                 <li>fire tools and how to use them</li>
                    <li> safe activities list</li>
                        <li> how and when to ask for help</li>
                        <li> how to respond to bullying, and harassment</li>
                        <li> managing your emotions</li>
                        <li> scheduling medical appointments</li>        
            </ul>
   <p> For more information about the general education curriculum and life skills classes, click on this General Education link below.</p> 
   <VStack padding= "10">
            <Link href="/Gened">
                <Button backgroundColor="brand.100">  Program A: Life Skills College Integration </Button>
            </Link>
                </VStack>
            </main>
        </>
    )
}