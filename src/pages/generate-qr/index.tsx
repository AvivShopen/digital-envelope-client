import { useEffect, useState } from "react";
import { CenteredHeader } from "../../components/CenteredHeader";
import Container from "../../components/Container";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import { Footer, StyledPaper } from "./styles";

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
      <StyledPaper>
        <CenteredHeader>
          {eventName && "Welcome to " + eventName}
        </CenteredHeader>
        <img src={QR} alt="QR_CODE" title="QR" />
        <Footer>Scan the QR code to participate</Footer>
      </StyledPaper>
    </Container>
  );
}
