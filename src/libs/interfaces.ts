import React from 'react'

export type TypeTheme = {
  theme: string;
}

export interface IForm {
  theme: "ligth" | "dark";
  lang: string;
}

export interface IQuestionBox {
  theme: "ligth" | "dark";
  question: string;
  answer: string;
  num: number;
  _id: string;
  lang: string;
}

export interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

export interface IQuestion {
  _id: string;
  answer: string;
  question: string;
}