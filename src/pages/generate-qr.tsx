import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GenerateQr() {
  const { event } = useParams();
  const QR = `https://api.qrserver.com/v1/create-qr-code/?data=${event}&amp;size=100x100`;
  return (
    <div>
      Test
      <img src={QR} alt="" title="" />
    </div>
  );
}
