import { TypeTheme } from '@/libs/interfaces'
import React from 'react'
import styles from '@/styles/Componentes.module.css'

const LoginForm: React.FC<TypeTheme> = ( props ) => {
  return (
    <div className={styles.createForm}>
      <p className={styles.formTitle}>Ingresar al Dashboard</p>
      <form className={styles.form} method="post">
        <div className={styles.formLabelBoxLogin}>
          <label className={styles.formLabel} htmlFor="email">
            EMAIL
          </label>
          <input
            className={styles.fromInput}
            id="email"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className={styles.formLabelBoxLogin}>
          <label className={styles.formLabel} htmlFor="password">
            CONTRASEÑA
          </label>
          <input
            className={styles.fromInput}
            id="password"
            type="password"
            autoComplete="off"
          />
        </div>
        <button className={styles.formButton}>LOGIN</button>
      </form>
    </div>
  )
}

export default LoginForm