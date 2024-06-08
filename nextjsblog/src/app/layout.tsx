import type { Metadata } from "next"

import "./globals.css"
import Link from "next/link";
import styles from './layout.module.css'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'




export const metadata: Metadata = {
  title: '블로그 사이트 ',
  description: '나의 블로그를 Next.js로 만들어 봅시다.',
  metadataBase: null,
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
