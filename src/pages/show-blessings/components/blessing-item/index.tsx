import { Card, Typography } from "@mui/material";
import React from "react";
import { Blessing } from "../../../../types/blessing";

const BlessingItem = ({
  createdBy,
  text,
  createdAt,
  paymentAmount,
}: Blessing) => {
  const date = new Date(createdAt).toLocaleDateString();
  return (
    <Card>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        {createdBy}
      </Typography>
      <Typography>{text}</Typography>
      <Typography>{paymentAmount}</Typography>
      {/* <Typography>{</Typography> */}
    </Card>
  );
};

export default BlessingItem;
