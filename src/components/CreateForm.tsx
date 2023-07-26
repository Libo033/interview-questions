import { IForm } from "@/libs/interfaces";
import React from "react";
import styles from "@/styles/Componentes.module.css";

const CreateForm: React.FC<IForm> = (props) => {
  return (
    <div className={styles.createForm}>
      <p className={styles.formTitle}>Crear nueva pregunta de {props.lang}</p>
      <form className={styles.form} method="post">
        <div className={styles.formLabelBox}>
          <label className={styles.formLabel} htmlFor="question">
            QUESTION
          </label>
          <input
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
            className={styles.formTextArea}
            id="answer"
            cols={30}
            rows={10}
            autoComplete="off"
          ></textarea>
        </div>
        <button className={styles.formButton}>CREAR</button>
      </form>
    </div>
  );
};

export default CreateForm;
