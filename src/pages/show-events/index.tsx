import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/header";
import useApi from "../../hooks/useApi";
import { Event, EventTypes } from "../../types/event";
import EventItem from "./components/event-item";
import { StyledGrid } from "./styles";

const ShowEvents: React.FC<any> = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // fetchEvents();
  }, []);

  const mockEvents: Event[] = [
    {
      id: 1,
      createdAt: new Date(),
      estimatedGuests: 10,
      lastUpdatedAt: new Date(),
      name: "Test",
      type: EventTypes.Party,
    },
    {
      id: 2,
      createdAt: new Date(),
      estimatedGuests: 120,
      lastUpdatedAt: new Date(),
      name: "Testtos",
      type: EventTypes.Birthday,
    },
    {
      id: 3,
      createdAt: new Date(),
      estimatedGuests: 10,
      lastUpdatedAt: new Date(),
      name: "Test2",
      type: EventTypes.Party,
    },
    {
      id: 4,
      createdAt: new Date(),
      estimatedGuests: 10,
      lastUpdatedAt: new Date(),
      name: "Test2",
      type: EventTypes.Party,
    },
  ];

  const fetchEvents = async () => {
    const { data } = await useApi.events().getByUser(1);
    setEvents((prev) => data);
  };

  return (
    <>
      <SideBar />
      <Stack sx={{ flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          My events
        </Typography>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            {mockEvents.map((event, index) => {
              return (
                <StyledGrid>
                  <EventItem key={"" + event.id} event={event} />
                </StyledGrid>
              );
            })}
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default ShowEvents;
