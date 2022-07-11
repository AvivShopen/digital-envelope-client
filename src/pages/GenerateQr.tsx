import { useParams } from "react-router-dom";

export default function GenerateQr() {
  const { event } = useParams();
  const url = `http://localhost:3000`;
  const QR = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&amp;size=100x100`;
  return (
    <div>
      Test
      <img src={QR} alt="" title="" />
    </div>
  );
}
