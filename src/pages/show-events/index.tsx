import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar";
import useApi from "../../hooks/useApi";
import { useUserStore } from "../../states/auth-store";
import { Event, EventTypes } from "../../types/event";
import EventItem from "./components/event-item";
import { StyledGrid } from "./styles";

const ShowEvents: React.FC<any> = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const { user, setUser } = useUserStore();

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
      <Stack sx={{ flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          My events
        </Typography>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            {events.map((event: Event, index: number) => {
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
