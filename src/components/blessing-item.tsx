import React from "react";
import { Blessing } from "../types/blessing";
import styles from "./blessing-item.module.css";

function BlessingItem({ createdBy, text, createdAt, paymentAmount }: Blessing) {
  const date = new Date(createdAt).toLocaleDateString();
  return (
    <div className={styles['blessing-card']}>
      <h4 className={styles['blessing-header']}>{"By " + createdBy}</h4>
      <p className={styles["blessing-text"]}>{text}</p>
      <h5 className={styles["blessing-payment-amount"]}>{paymentAmount}</h5>
      <div className={styles["blessing-date"]}>{date}</div>
    </div>
  );
}

export default BlessingItem;
