'use client'

import Link from "next/link";
import styles from "./NavBar.module.css"
import { Open_Sans, Nanum_Gothic } from 'next/font/google'

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ subsets: ['latin'] , weight: '700'});

export default function NavBar() { 
  return  (
    <header className={styles.header}>
      <h1 className={gothic.className}><Link href="/home">Roaving's Blog</Link></h1>
      <nav className={styles.nav}>
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/posts">posts</Link>
          <Link href="/contact">contact</Link>
      </nav>
    </header>
  )
}