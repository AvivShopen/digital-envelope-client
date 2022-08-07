import { Check, Close, Lock, LockClock, LockOpen } from "@mui/icons-material";
import { CardContent, Chip, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useEventStore } from "../../../../states/event-store";
import { Event } from "../../../../types/event";
import { CardContainer, CenteredGrid } from "./styles";

interface Props {
  event: Event;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const setEvent = useEventStore((state) => state.setEvent);
  const createdAt = new Date(event.createdAt).toLocaleDateString();
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
                <Typography
                  color="textSecondary"
                  display="inline"
                  sx={{ pl: 1 }}
                  variant="body2"
                >
                  {"Created at: " + createdAt}
                </Typography>
              </CenteredGrid>
              <CenteredGrid item>
                {event.closed ? (
                  <Chip
                    label={"Closed"}
                    color={"error"}
                    sx={{ fontWeight: "600" }}
                    icon={<Close />}
                  />
                ) : (
                  <Chip
                    label={"Open"}
                    color={"success"}
                    sx={{ fontWeight: "600" }}
                    icon={<Check />}
                  />
                )}
              </CenteredGrid>
            </Grid>
          </Box>
        </Box>
      </Link>
    </CardContainer>
  );
};

export default EventItem;
