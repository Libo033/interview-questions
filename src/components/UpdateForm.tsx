import { IForm } from "@/libs/interfaces";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "@/styles/Componentes.module.css";
import { useRouter } from "next/router";
import langConverter from "@/libs/langConverter";

const UpdateForm: React.FC<IForm> = (props) => {
  const router = useRouter();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleModify = (e: any) => {
    e.preventDefault();

    try {
      fetch(
        `/api/v1/questions/${langConverter(
          router.query.lang?.toString() || ""
        )}/${router.query._id?.toString()}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question,
            answer,
          }),
        }
      );

      router.push(`/${router.query.lang?.toString().toLowerCase()}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleDelete = (e: any) => {
    e.preventDefault();

    try {
      fetch(
        `/api/v1/questions/${langConverter(
          router.query.lang?.toString() || ""
        )}/${router.query._id?.toString()}`,
        { method: "DELETE" }
      );

      router.push(`/${router.query.lang?.toString().toLowerCase()}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetch(
      `/api/v1/questions/${langConverter(
        router.query.lang?.toString() || ""
      )}/${router.query._id?.toString()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.question);
        setAnswer(data.answer);
      })
      .catch((error) => {
        router.push("/admin/dashboard")
      })
  }, []);

  return (
    <div className={styles.createForm}>
      <p className={styles.formTitle}>Modificar pregunta de {props.lang}</p>
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
        <div className={styles.formButtonGroup}>
          <button onClick={(e) => handleDelete(e)} className={styles.formButton}>ELIMINAR</button>
          <button onClick={(e) => handleModify(e)} className={styles.formButton}>MODIFICAR</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
