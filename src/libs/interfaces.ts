export type TypeTheme = {
  theme: "ligth" | "dark";
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
}