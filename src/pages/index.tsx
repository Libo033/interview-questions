import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className + " pagina"}>
      <Navbar theme={"ligth"} />
    </div>
  );
}
