//"use client"
import fs from 'fs';
import path from 'path';
import styles from './page.module.css'
export default function Home({posts}) {
  console.log(posts);
  return (
    <main className={styles.main}>
      <title>Spectrum Station School</title>
      <h1>Spectrum Station School</h1>
      <h2>Welcome to Spectrum Station School, the school for people with Autism and related disabilities.</h2>
      <h4> Attached above are two programs, A, and B, that each serve a different role in helping people with different priorities and needs</h4>
      <h4>Coming soon will be a portal that students will use to access notes from their classes and activities/assignments to help reinforce their skills</h4>
    </main>
  )
}
export async function getStaticProps() {
  const files= fs.readdirSync(path.join('posts'));

  const posts = files.map(filename =>{

    const slug= filename.replace('.md','')

    const markdownWithMeta= fs.readFileSync(path.join('posts', filename),
    'utf-8'
  )
    return{
      slug
    }
  })
  console.log(posts);
  return {
    props: {
      posts: 'The Posts',
    },
  }
}