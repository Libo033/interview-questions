import React from "react";
import Layout from "../../../components/Layout";
import styles from "@/styles/Admin.module.css";
import CreateForm from "@/components/CreateForm";
import Link from "next/link";
import { useRouter } from "next/router";

const Create = () => {
  const router = useRouter();

  return (
    <Layout title="Crear">
      <div className={styles.Create}>
        <CreateForm
          theme={"ligth"}
          lang={router.query.lang?.toString() || ""}
        />
        <Link className={styles.linkDashboard} href={"/admin/dashboard"}>
          Volver al dashboard
        </Link>
      </div>
    </Layout>
  );
};

export default Create;
