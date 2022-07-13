import { useEffect, useState } from "react";
import api from "../api";
import { useEventStore } from "../states/event-store";

export default function GenerateQr() {
  const { eventId } = useEventStore();
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    fetchEvent();
  });

  const fetchEvent = async () => {
    try {
      //Get the events name from server
      const { data } = await api.events().getById(eventId);
      setEventName(data.name);
    } catch (err) {
      alert(err);
    }
  };
  const url = `http://localhost:3000/blessings/${eventId}`;
  const QR = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&amp;size=100x100`;
  return (
    <div>
      {eventName && "Welcome to" + eventName}
      <img src={QR} alt="QR_CODE" title="QR" />
    </div>
  );
}
