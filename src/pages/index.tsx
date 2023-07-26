import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import QuestionBox from "@/components/QuestionBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className + " pagina"}>
      <QuestionBox
        theme={"ligth"}
        question={"Que es TypeScript"}
        answer={
          "TypeScript es un lenguaje de programacion desarrollado por Microsoft.TypeScript es un lenguaje de programacion desarrollado por MicrosoftTypeScript es un lenguaje de programacion desarrollado por MicrosoftTypeScript es un lenguaje de programacion desarrollado por MicrosoftTypeScript es un lenguaje de programacion desarrollado por Microsoft"
        }
        num={1}
      />
      
    </div>
  );
}
