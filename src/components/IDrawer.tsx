import { TypeTheme } from '@/libs/interfaces'
import React from 'react'
import styles from '@/styles/Componentes.module.css'
import Link from 'next/link'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const IDrawer: React.FC<TypeTheme> = ( props ) => {
  return (
    <div className={styles.IDrawer + " " + inter.className}>
      <h2 className={styles.drawerTitle}>Q&A</h2>
      <div className={styles.drawerLinkContainer}>
        <Link className={styles.drawerLink} href={"/javascript"}>JavaScript</Link>
        <Link className={styles.drawerLink} href={"/react"}>React</Link>
        <Link className={styles.drawerLink} href={"/typescript"}>TypeScript</Link>
      </div>
    </div>
  )
}

export default IDrawer