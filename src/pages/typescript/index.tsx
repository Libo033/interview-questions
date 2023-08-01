import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Questions.module.css";
import QuestionBox from "@/components/QuestionBox";
import { IQuestion } from "@/libs/interfaces";
import { CircularProgress, Divider } from "@mui/material";

const Typescript = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch("/api/v1/questions/ts", {
      signal,
    })
      .then((res) => res.json())
      .then((data) => setQuestions(data.ts))
      .catch((e) => {
        if (e.name !== "AbortError") {
          console.error(e.message);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <Layout title="TypeScript">
      <div className={styles.page}>
        <p className={styles.title}>Preguntas TypeScript</p>
        <Divider style={{ borderColor: "var(--secondaryNav)" }} />
        <div className={styles.questions}>
          {questions.length > 0 &&
            questions.map((q, index) => (
              <QuestionBox
                theme={"ligth"}
                key={q._id}
                question={q.question}
                answer={q.answer}
                num={index + 1}
                _id={q._id}
              />
            ))}
          {questions.length === 0 && (
            <div className={styles.loaderContainer}>
              <CircularProgress color="inherit" />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Typescript;
