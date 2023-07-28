import Layout from '@/components/Layout'
import React, { useState, useEffect } from 'react'
import styles from '@/styles/Admin.module.css'
import LoginForm from '@/components/LoginForm'
import { useTheme } from "next-themes";

const Admin = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  
  return (
    <Layout title='Admin'>
      <div className={styles.page}>
        <LoginForm theme={currentTheme === undefined? "dark" : currentTheme} />
      </div>
    </Layout>
  )
}

export default Admin