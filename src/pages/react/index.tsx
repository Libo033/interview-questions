import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Questions.module.css";
import QuestionBox from "@/components/QuestionBox";
import { IQuestion } from "@/libs/interfaces";
import { CircularProgress, Divider } from "@mui/material";

const ReactP = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch("/api/v1/questions/react", {
      signal,
    })
      .then((res) => res.json())
      .then((data) => setQuestions(data.react))
      .catch((e) => {
        if (e.name !== "AbortError") {
          console.error(e.message);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <Layout title="React">
      <div className={styles.page}>
        <p className={styles.title}>Preguntas React</p>
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

export default ReactP;
