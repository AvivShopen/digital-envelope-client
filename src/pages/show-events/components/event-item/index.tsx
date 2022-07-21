import { LockClock } from "@mui/icons-material";
import { Avatar, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useEventStore } from "../../../../states/event-store";
import { CardContainer, CenteredGrid, FlexBox } from "./styles";

interface Props {
  eventId: number;
  children: React.ReactNode;
}

const EventItem: React.FC<Props> = ({ children, eventId }) => {
  const setEvent = useEventStore((state) => state.setEvent);
  return (
    <CardContainer>
      <CardContent>
        <FlexBox>
          <Avatar alt="Event" variant="square" />
          <Link onClick={() => setEvent(eventId)} to={"/blessings"}>
            {children}
          </Link>
        </FlexBox>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          Event Name
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          Wedding | 250 guests
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
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
    </CardContainer>
  );
};

export default EventItem;
