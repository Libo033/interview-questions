import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CreateForm from '@/components/CreateForm'
import React from 'react'
import UpdateForm from '@/components/UpdateForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className + " pagina"}>
      <UpdateForm theme={'ligth'} lang={'JavaScript'} />
    </div>
  )
}
