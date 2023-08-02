import { IQuestionBox } from "@/libs/interfaces";
import React from "react";
import styles from "@/styles/Componentes.module.css";
import { NextRouter, useRouter } from "next/router";

const QuestionBox: React.FC<IQuestionBox> = (props) => {
  const router: NextRouter = useRouter();

  const handleRoute = (): void => {
    router.push(`/admin/dashboard/update?lang=${props.lang}&_id=${props._id}`, undefined, { shallow: true });
  }

  return (
    <div id={props.num.toString()} className={styles.questionBox} onDoubleClick={() => handleRoute()}>
      <p className={styles.question}>
        {props.num} - {props.question}
      </p>
      <p className={styles.answer}>{props.answer}</p>
    </div>
  );
};

export default QuestionBox;
