import { IQuestionBox } from '@/libs/interfaces'
import React from 'react'
import styles from '@/styles/Componentes.module.css'

const QuestionBox: React.FC<IQuestionBox> = ( props ) => {
  return (
    <div className={styles.questionBox}>
      <p className={styles.question}>{props.num} - {props.question}</p>
      <p className={styles.answer}>{props.answer}</p>
    </div>
  )
}

export default QuestionBox