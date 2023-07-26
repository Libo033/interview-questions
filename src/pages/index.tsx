import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className + " pagina"}>
      <Footer theme={'ligth'} />
    </div>
  )
}
