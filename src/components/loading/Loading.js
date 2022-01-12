import React from "react";
import styles from "./styles.module.css";

export const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
};
