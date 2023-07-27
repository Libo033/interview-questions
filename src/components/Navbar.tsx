import { TypeTheme } from "@/libs/interfaces";
import React, { useState } from "react";
import styles from "@/styles/Componentes.module.css";
import Link from "next/link";
import Image from "next/image";
import { Drawer } from "@mui/material";
import IDrawer from "./IDrawer";

const Navbar: React.FC<TypeTheme> = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <Link href={"/"} className={styles.logoContainer}>
        <h1 className={styles.logo}>Q&A</h1>
      </Link>
      <div className={styles.nextLinkContainer}>
        <Link className={styles.nextLink} href={"/javascript"}>
          JavaScript
        </Link>
        <Link className={styles.nextLink} href={"/react"}>
          React
        </Link>
        <Link className={styles.nextLink} href={"/typescript"}>
          TypeScript
        </Link>
      </div>
      <div className={styles.menuContainer}>
        <Image
          onClick={() => setToggleDrawer(true)}
          className={styles.menu}
          src={"/img/menu.svg"}
          alt={"menu"}
          width={33}
          height={33}
        />
      </div>
      <Drawer anchor="right" open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        <IDrawer theme={"ligth"} />
      </Drawer>
    </div>
  );
};

export default Navbar;
