import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CenteringContainer from "../../components/CenteringContainer";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import { StyledPaper } from "./styles";

export default function GenerateQr() {
  const { eventId } = useEventStore();
  const [eventName, setEventName] = useState("");
  const QR = useApi
    .qr()
    .generate(`${import.meta.env.VITE_CLIENT_URL}/blessings/${eventId}`);

  useEffect(() => {
    // fetchEvent();
    setEventName("Mock event");
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
    <CenteringContainer>
      <StyledPaper>
        <Typography variant="h2" textAlign="center">
          {eventName}
        </Typography>
        <img src={QR} alt="QR_CODE" title="QR" />
        <Typography variant="body1">Scan the QR code to participate</Typography>
      </StyledPaper>
    </CenteringContainer>
  );
}
