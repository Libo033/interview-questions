import { TypeTheme } from '@/libs/interfaces'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Componentes.module.css'
import Link from 'next/link'
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

const IDrawer: React.FC<TypeTheme> = ( props ) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className={styles.IDrawer + " " + inter.className}>
      <h2 className={styles.drawerTitle}>Q&A</h2>
      <div
          className={styles.themeButton}
          onClick={() => setTheme(currentTheme === "ligth" ? "dark" : "ligth")}
        >
          <Image
            src={currentTheme === "ligth" ? "/img/moon.svg" : "/img/sun.svg"}
            alt="theme"
            height={21}
            width={21}
          />
        </div>
      <div className={styles.drawerLinkContainer}>
        <Link className={styles.drawerLink} href={"/javascript"}>JavaScript</Link>
        <Link className={styles.drawerLink} href={"/react"}>React</Link>
        <Link className={styles.drawerLink} href={"/typescript"}>TypeScript</Link>
      </div>
    </div>
  )
}

export default IDrawer