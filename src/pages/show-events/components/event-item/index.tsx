import { LockClock } from "@mui/icons-material";
import { Avatar, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useEventStore } from "../../../../states/event-store";
import { Event } from "../../../../types/event";
import { CardContainer, CenteredGrid, FlexBox } from "./styles";

interface Props {
  event: Event;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const setEvent = useEventStore((state) => state.setEvent);
  return (
    <CardContainer>
      <Link
        style={{ textDecoration: "none" }}
        onClick={() => setEvent(event)}
        to={"/dashboard"}
      >
        <CardContent>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {event.name}
          </Typography>

          <Typography align="center" color="textPrimary" variant="body1">
            {event.type + " | " + event.estimatedGuests}
          </Typography>
        </CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: "space-between" }}
            >
              <CenteredGrid item>
                <LockClock color="action" />
                <Typography
                  color="textSecondary"
                  display="inline"
                  sx={{ pl: 1 }}
                  variant="body2"
                >
                  Created at : 16/02/2023
                </Typography>
              </CenteredGrid>
              <CenteredGrid item>
                <LockClock color="action" />
                <Typography
                  color="textSecondary"
                  display="inline"
                  sx={{ pl: 1 }}
                  variant="body2"
                >
                  Closed
                </Typography>
              </CenteredGrid>
            </Grid>
          </Box>
        </Box>
      </Link>
    </CardContainer>
  );
};

export default EventItem;
