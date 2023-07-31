import Layout from "@/components/Layout";
import React from "react";
import styles from "@/styles/Admin.module.css";
import UpdateForm from "@/components/UpdateForm";
import Link from "next/link";
import { useRouter } from "next/router";

const Update = () => {
  const router = useRouter();

  return (
    <Layout title="Modificar">
      <div className={styles.Update}>
        <UpdateForm
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

export default Update;
