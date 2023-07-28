import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { Chip, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <Layout title={"Inicio"}>
      <div className={styles.page}>
        <h2 className={styles.title}>
          Explora y aprende diferentes preguntas para tu proxima entrevista
        </h2>
        <p className={styles.description}>
          Tu destino definitivo para aprender, resolver dudas y sumergirte en el
          fascinante mundo de la programación. Ya seas un principiante
          entusiasta o un programador experimentado, aquí encontrarás una amplia
          variedad de preguntas y respuestas sobre diversos lenguajes de
          programación que podras usar para practicar para tus proximas
          entrevistas.
        </p>
        <div className={styles.langs}>
          <Image
            src={"/img/javascript.svg"}
            alt="javascript"
            width={120}
            height={120}
          />
          <Image src={"/img/react.svg"} alt="react" width={120} height={120} />
          <Image
            src={"/img/typescript.svg"}
            alt="typescript"
            width={120}
            height={120}
          />
        </div>
        <Divider style={{borderColor: "#73B4C351"}} />
        <div className={styles.container}>
          <div className={styles.destacadas}>
            <p className={styles.titleQuestion}>
              Preguntas destacadas JavaScript:
            </p>
            <div className={styles.chips}>
              <Link className={styles.chip} href="/javascript/#">
                ¿Que es JavaScript?
              </Link>
              <Link className={styles.chip} href="/javascript/#">
                ¿Que es DOM?
              </Link>
              <Link className={styles.chip} href="/javascript/#">
                ¿Que es AJAX?
              </Link>
            </div>
          </div>
          <div className={styles.destacadas}>
            <p className={styles.titleQuestion}>Preguntas destacadas React:</p>
            <div className={styles.chips}>
              <Link className={styles.chip} href="/react/#">
                ¿Que es React?
              </Link>
              <Link className={styles.chip} href="/react/#">
                ¿Que es JSX?
              </Link>
              <Link className={styles.chip} href="/react/#">
                ¿Que son los hooks?
              </Link>
              <Link className={styles.chip} href="/react/#">
                ¿Que es React DOM?
              </Link>
              <Link className={styles.chip} href="/react/#">
                useMemo & useCallback
              </Link>
              <Link className={styles.chip} href="/react/#">
                ¿Que es la hidratacion y como funciona?
              </Link>
            </div>
          </div>
          <div className={styles.destacadas}>
            <p className={styles.titleQuestion}>
              Preguntas destacadas TypeScript:
            </p>
            <div className={styles.chips}>
              <Link className={styles.chip} href="/typescript/#">
                ¿Que es TypeScript?
              </Link>
              <Link className={styles.chip} href="/typescript/#">
                ¿Que es una interface?
              </Link>
              <Link className={styles.chip} href="/typescript/#">
                ¿Que es un type?
              </Link>
              <Link className={styles.chip} href="/typescript/#">
                Herencia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
