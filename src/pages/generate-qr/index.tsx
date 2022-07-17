import { useEffect, useState } from "react";
import Container from "../../components/Container";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import { Header } from "./styles";

export default function GenerateQr() {
  const { eventId } = useEventStore();
  const [eventName, setEventName] = useState("");
  const QR = useApi
    .qr()
    .generate(`${import.meta.env.VITE_CLIENT_URL}/blessings/${eventId}`);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      //Get the events name from server
      const { data } = await useApi.events().getById(8);
      setEventName(data.name);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Container>
      <Header>{eventName && "Welcome to" + eventName}</Header>
      <img src={QR} alt="QR_CODE" title="QR" />
    </Container>
  );
}
