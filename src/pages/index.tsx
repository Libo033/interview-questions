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
      </div>
    </Layout>
  );
}
