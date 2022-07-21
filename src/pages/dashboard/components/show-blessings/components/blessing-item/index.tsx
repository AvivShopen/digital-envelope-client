import React from "react";
import { Blessing } from "../../../../../../types/blessing";

function BlessingItem({ createdBy, text, createdAt, paymentAmount }: Blessing) {
  const date = new Date(createdAt).toLocaleDateString();
  return (
    <div>
      <div>
        <div>{date}</div>
        <h4>{"By " + createdBy}</h4>
        <p>{text}</p>
        <h5>{paymentAmount}</h5>
      </div>
    </div>
  );
}

export default BlessingItem;
