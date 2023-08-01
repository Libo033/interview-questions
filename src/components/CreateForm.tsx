import { IForm } from "@/libs/interfaces";
import React, { useState } from "react";
import styles from "@/styles/Componentes.module.css";
import { NextRouter, useRouter } from "next/router";
import langConverter from "@/libs/langConverter";

const CreateForm: React.FC<IForm> = (props) => {
  const router: NextRouter = useRouter();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleCreate = (e: any) => {
    e.preventDefault();

    try {
      fetch(`/api/v1/questions/${langConverter(router.query.lang?.toString() || "")}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          answer,
        }), 
      });

      router.push("/admin/dashboard");
    } catch (error) {
      router.push("/");
    }
  };

  return (
    <div className={styles.createForm}>
      <p className={styles.formTitle}>Crear nueva pregunta de {props.lang}</p>
      <form className={styles.form} method="post">
        <div className={styles.formLabelBox}>
          <label className={styles.formLabel} htmlFor="question">
            QUESTION
          </label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={styles.fromInput}
            id="question"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className={styles.formLabelBox}>
          <label className={styles.formLabel} htmlFor="answer">
            ANSWER
          </label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={styles.formTextArea}
            id="answer"
            cols={30}
            rows={10}
            autoComplete="off"
          ></textarea>
        </div>
        <button onClick={(e) => handleCreate(e)} className={styles.formButton}>
          CREAR
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
