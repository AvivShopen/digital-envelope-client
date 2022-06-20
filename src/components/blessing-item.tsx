import React from "react";
import { Blessing } from "../types/blessing";
import "./blessing-item.css";

function BlessingItem({ by, text, createdAt, paymentAmount }: Blessing) {
  const date = createdAt.toLocaleDateString();
  return (
    <div className="blessing-card">
      <h4 className="blessing-header">{"By " + by}</h4>
      <p className="blessing-text">{text}</p>
      <h5 className="blessing-payment-amount">{paymentAmount}</h5>
      <div className="blessing-date">{date}</div>
    </div>
  );
}

export default BlessingItem;
