import { TypeTheme } from "@/libs/interfaces";
import React, { FormEvent, useState } from "react";
import styles from "@/styles/Componentes.module.css";
import { NextRouter, useRouter } from "next/router";

const LoginForm: React.FC<TypeTheme> = (props) => {
  const router: NextRouter = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (Event: FormEvent) => {
    Event.preventDefault();

    try {
      fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.login) {
            router.push("/admin/dashboard");
          }
        });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className={styles.createForm}>
      <p className={styles.formTitle}>Ingresar al Dashboard</p>
      <form
        onSubmit={(Event: FormEvent) => handleLogin(Event)}
        className={styles.form}
        method="post"
      >
        <div className={styles.formLabelBoxLogin}>
          <label className={styles.formLabel} htmlFor="email">
            EMAIL
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.fromInput}
            id="password"
            type="password"
            autoComplete="off"
          />
        </div>
        <button type="submit" className={styles.formButton}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
