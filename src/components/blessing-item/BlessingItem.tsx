import React from "react";
import { Blessing } from "../../types/blessing";
import styles from "./blessing-item.module.css";

function BlessingItem({ createdBy, text, createdAt, paymentAmount }: Blessing) {
  const date = new Date(createdAt).toLocaleDateString();
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.date}>{date}</div>
        <h4 className={styles.header}>{"By " + createdBy}</h4>
        <p className={styles.text}>{text}</p>
        <h5 className={styles.amount}>{paymentAmount}</h5>
      </div>
    </div>
  );
}

export default BlessingItem;
