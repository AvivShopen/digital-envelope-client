import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import styles from "./generate-qr.module.css";

export default function GenerateQr() {
  const { eventId } = useEventStore();
  const [eventName, setEventName] = useState("");
  const QR = useApi
    .qr()
    .generate(`${import.meta.env.VITE_CLIENT_URL}/blessings/${eventId}`);

  useEffect(() => {
    // fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      //Get the events name from server
      const { data } = await useApi.events().getById(eventId);
      setEventName(data.name);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {eventName ? eventName && "Welcome to" + eventName : "Hi"}
      </h2>
      <img src={QR} alt="QR_CODE" title="QR" />
    </div>
  );
}
