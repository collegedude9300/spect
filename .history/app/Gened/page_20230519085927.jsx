import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { VStack, Button } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Gened() {
    return(
<main className={styles.main}>
    <h1> Gen Ed: </h1>
    <div>
    <form>
      <p> Section 1A: Oral Communication </p>
      <div className="form-check">
          <input type="radio"class="form-check-input" id="comm" name="s1A"/>
          <label className="form-check-label" htmlFor="comm">  COMM 101: Oral Communication</label>
      </div>
      <p> Section 1B: Written Communication </p>
      <div className="form-check">
          <input type="radio" class="form-check-input" id="eng1" name="s1B"/>
          <label className="form-check-label" htmlFor="eng1"> ENG 100: College English Composition </label>
      </div>
      <p> Section 1C: Critical Thinking and Reading Skills </p>
      <div className="form-check">
          <input type="radio"class="form-check-input" id="eng2" name="s1C"/>
          <label className="form-check-label" htmlFor="eng2"> ENG 200: Reading and Analysis </label>
      </div>
      <p> Section 2A: Numerical Skills </p>
      <div className="form-check">
          <input type="radio" class="form-check-input" id="math1"name="s2A"/>
          <label className="form-check-label"htmlFor="math1"> MATH 101: College Algebra I </label>
          <br/>
        </div>
      <div className="form-check">
          <input type="radio"class="form-check-input" id="math2" name="s2A"/>
          <label  class="form-check-label" htmlFor="math2"> MATH 102: College Algebra II </label>
          <br/>
        </div>
      <div className="form-check">
          <input type="radio" class="form-check-input" id="math3" name="s2A"/>
          <label  class="form-check-label" htmlFor="math3"> MATH 103: Statistics </label>
          <br/>
        </div>
        <div className="form-check">
          <input type="radio" class="form-check-input" id="math3" name="s2A"/>
          <label  class="form-check-label" htmlFor="math3"> MATH 105: Business and Consumer Math </label>
          <br/>
        </div>

      <p> Section 2B:  Science Skills </p>
	  <div className="form-check">
          <input type="radio" class="form-check-input" id="bio1"name="s2B"/>
          <label className="form-check-label" htmlFor="bio1"> BIO 100: General Biology </label>
          <br/>
		  </div>
		  <div className="form-check">
          <input type="radio" class="form-check-input" id= "bio3"name="s2B"/>
          <label className="form-check-label" htmlFor="zoo1"> BIO 103: General Plant Science </label>
		  <br/>
		  </div>
      <div className="form-check">
        <input type="radio" class="form-check-input" id= "zoo1"name="s2B"/>
        <label  class="form-check-label" htmlFor="zoo1"> ZOO 100: General Zoology </label>
    <br/>
    </div>
      <p  > Section 3: Life Skills Essentials </p>
        <div className="form-check">
    <input type="radio" class="form-check-input" id="check1" name="option1" value="something"/>
      <label className="form-check-label" htmlFor="check1">LIFE 101: Life Skills I</label>
    </div>
    <div className="form-check">
      <input type="radio" class="form-check-input" id="check2" name="option2" value="something"/>
      <label className="form-check-label" htmlFor="check2">LIFE 102: Life Skills II (PREREQ: Life 101)</label>
    </div>
    <div className="form-check">
      <input type="radio" class="form-check-input" id="check2" name="option2" value="something"/>
      <label className="form-check-label" htmlFor="check2">LIFE 105: Social Skills (COREQ: Life 101)</label>
    </div>
      <p> Section 4: History</p>
      <div className="form-check">
          <input type="radio" class="form-check-input" id="chem1"name="s4"/>
          <label className="form-check-label" htmlFor="chem1"> HIST 100 and 101: World History </label>
          <br/>
        </div>
        <div className="form-check">
          <input type="radio" class="form-check-input"id="phys1" name="s4"/>
          <label className="form-check-label" htmlFor="phys1"> HIST 110 and 111: United States History </label>
          <br/>
        </div>
        <p> Section 5: Electives</p>
      <div className="form-check">
          <input type="checkbox" class="form-check-input" id="life103"name="s5"/>
          <label className="form-check-label" htmlFor="chem1">Life 103: Financial Skills (PREREQ: Life 101) </label>
          <br/>
        </div>
        <div className="form-check">
          <input type="checkbox" class="form-check-input"id="life104" name="s5"/>
          <label className="form-check-label" htmlFor="phys1"> Life 104: Cooking Skills (ADV: Life 101) </label>
          <br/>
        </div>
        <div className="form-check">
          <input type="checkbox" class="form-check-input"id="mus114" name="s5"/>
          <label className="form-check-label" htmlFor="phys1"> Mus 114: History of Rock and Roll </label>
          <br/>
        </div>
        <div className="form-check">
          <input type="checkbox" class="form-check-input"id="art100" name="s5"/>
          <label className="form-check-label" htmlFor="phys1"> Art 100: Art Essentials of Drawing </label>
          <br/>
        </div>
        <div className="form-check">
          <input type="checkbox" class="form-check-input"id="mus113" name="s5"/>
          <label className="form-check-label" htmlFor="phys1"> Mus 113: Survey of Rock and Roll </label>
<br/>

        </div>
        <VStack padding= "10">
            <Link href="/ProgramA">
                <Button backgroundColor="brand.100"> Sample Submit </Button>
            </Link>
                </VStack>
      </form>
        </div>
   </main>  
    )}