import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import IDashboard from "../../types/dashboard";
import DashboardCard from "./components/dashboard-item";
import { DashboardLayoutRoot, StatBox, StyledGrid } from "./styles";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import { Container } from "@mui/system";
import { ArrowDownward } from "@mui/icons-material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DashboardToolbar from "../../components/toolbar";
import SideBar from "../../components/sidebar";

const Dashboard = () => {
  const { event } = useEventStore();
  const [data, setData] = useState<IDashboard>();

  const fetchData = async () => {
    // const { data } = await useApi.dashboard().getData(event.id);
    const { data } = await useApi.dashboard().getData(8);
    setData((prev) => data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <>
          <SideBar />
          <DashboardLayoutRoot>
            <DashboardToolbar />
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <StyledGrid>
                  <DashboardCard
                    title="Average Per Guest"
                    iconColor="#D14343"
                    icon={<InsertChartIcon />}
                    mainStat={data.averagePerGuest + "$"}
                  >
                    <StatBox>
                      <ArrowDownward color="error" />
                      <Typography
                        color="error"
                        sx={{
                          mr: 1,
                        }}
                        variant="body2"
                      >
                        12%
                      </Typography>
                      <Typography color="textSecondary" variant="caption">
                        Compared to similar events
                      </Typography>
                    </StatBox>
                  </DashboardCard>
                </StyledGrid>
                <StyledGrid>
                  <DashboardCard
                    title="Event Closes At"
                    iconColor="#5048E5"
                    icon={<EventNoteIcon />}
                    mainStat={"17/02/2023"}
                  >
                    <Typography color="textSecondary" variant="caption">
                      15 days left
                    </Typography>
                  </DashboardCard>
                </StyledGrid>

                <StyledGrid>
                  <DashboardCard
                    title="Guests Paid"
                    iconColor="#FFB020"
                    icon={<GroupIcon />}
                    mainStat={
                      Math.floor(
                        (data.paidGuests.current / data.paidGuests.max) * 100
                      ) + "%"
                    }
                  >
                    <Box sx={{ pt: 3 }}>
                      <LinearProgress
                        value={Math.floor(
                          (data.paidGuests.current / data.paidGuests.max) * 100
                        )}
                        variant="determinate"
                      />
                    </Box>
                  </DashboardCard>
                </StyledGrid>
                <StyledGrid>
                  <DashboardCard
                    title="Money Collected"
                    iconColor="#14B8A6"
                    icon={<AttachMoneyIcon />}
                    mainStat={data.totalAmount + "$"}
                  ></DashboardCard>
                </StyledGrid>
              </Grid>
            </Container>
          </DashboardLayoutRoot>
        </>
      ) : (
        <h2>"Loading..."</h2>
      )}
    </>
  );
};

export default Dashboard;
