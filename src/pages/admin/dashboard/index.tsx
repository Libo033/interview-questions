import Layout from "@/components/Layout";
import React from "react";
import styles from "@/styles/Admin.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const Dashboard = () => {
  const router = useRouter();

  const handleRoute = (route: string, lang: string) => {
    router.push(`/admin/dashboard/${route}?lang=${lang}`, undefined, { shallow: true })
  };

  return (
    <Layout title="Dashboard">
      <div className={styles.dashboard}>
        <h2 className={styles.dashboardTitle}>Dashboard</h2>
        <section className={styles.container}>
          <article className={styles.option}>
            <p>JavaScript</p>
            <Image
              src={"/img/javascript.svg"}
              alt="javascript"
              width={120}
              height={120}
            />
            <div className={styles.optionsBtnGroup}>
              <button onClick={() => handleRoute("update", "JavaScript")}>MODIFICAR</button>
              <button onClick={() => handleRoute("create", "JavaScript")}>CREAR</button>
            </div>
          </article>
          <article className={styles.option}>
            <p>React</p>
            <Image
              src={"/img/react.svg"}
              alt="react"
              width={120}
              height={120}
            />
            <div className={styles.optionsBtnGroup}>
              <button onClick={() => handleRoute("update", "React")}>MODIFICAR</button>
              <button onClick={() => handleRoute("create", "React")}>CREAR</button>
            </div>
          </article>
          <article className={styles.option}>
            <p>TypeScript</p>
            <Image
              src={"/img/typescript.svg"}
              alt="typescript"
              width={120}
              height={120}
            />
            <div className={styles.optionsBtnGroup}>
              <button onClick={() => handleRoute("update", "TypeScript")}>MODIFICAR</button>
              <button onClick={() => handleRoute("create", "TypeScript")}>CREAR</button>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
