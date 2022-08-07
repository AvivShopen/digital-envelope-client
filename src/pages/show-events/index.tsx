import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import CenteringContainer from "../../components/CenteringContainer";
import SideBar from "../../components/sidebar";
import useApi from "../../hooks/useApi";
import { Event } from "../../types/event";
import EventItem from "./components/event-item";
import { StyledGrid } from "./styles";

const ShowEvents: React.FC<any> = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data } = await useApi.events().getByUser();
    setEvents((prev) => data);
  };

  return (
    <>
      <SideBar />
      <CenteringContainer component="main">
        <Container maxWidth={"md"}>
          <Grid container spacing={3}>
            {events.map((event: Event, index: number) => {
              return (
                <StyledGrid key={index}>
                  <EventItem event={event} />
                </StyledGrid>
              );
            })}
          </Grid>
        </Container>
      </CenteringContainer>
    </>
  );
};

export default ShowEvents;
