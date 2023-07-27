import { ILayoutProps } from '@/libs/interfaces'
import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<ILayoutProps> = ( props ) => {
  const title = `Q&A - ${props.title}`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <body className={inter.className}>
        <Navbar theme={'ligth'} />
        {props.children}
        <Footer theme={'ligth'} />
      </body>
    </>
  )
}

export default Layout