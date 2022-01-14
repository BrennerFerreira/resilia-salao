import React from "react";
import { Helmet } from "react-helmet";
import styles from "./styles.module.css";

export const Loading = () => {
  return (
    <>
      <Helmet>
        <title>Resilia Salão</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.loading}></div>
      </div>
    </>
  );
};
