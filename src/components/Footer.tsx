import { TypeTheme } from '@/libs/interfaces'
import React from 'react'
import styles from '@/styles/Componentes.module.css'

const Footer: React.FC<TypeTheme> = ( props ) => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerTitle}>Valentin Libonati</p>
      <div className={styles.footerSocial}>
        <a className={styles.footerLink} href="https://www.linkedin.com/in/valentin-libonati-b608521b7/">Mi Linkedin</a>
        <a className={styles.footerLink} href="https://valentinlibonat33.vercel.app/">Mi Portfolio</a>
      </div>
    </div>
  )
}

export default Footer