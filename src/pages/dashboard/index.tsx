import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import IDashboard from "../../types/dashboard";
import ShowBlessings from "./components/show-blessings";
import DashboardCard from "./components/dashboard-item";
import { DashboardLayoutRoot, StatBox } from "./styles";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import { Container } from "@mui/system";
import { ArrowDownward } from "@mui/icons-material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DashboardToolbar from "./components/toolbar";
import SideBar from "../../components/header";

const Dashboard = () => {
  const { eventId } = useEventStore();
  const [data, setData] = useState<IDashboard>();
  const [eventName, setEventName] = useState<string>("");

  const fetchData = async () => {
    const { data } = await useApi.dashboard().getData(8);
    setData((prev) => data);
  };

  useEffect(() => {
    // fetchData();
    const mockData: IDashboard = {
      averagePerGuest: 120,
      paidGuests: {
        current: 50,
        max: 100,
      },
      totalAmount: 1500,
    };

    setData((prev) => mockData);
    setEventName((prev) => "Mock event");
  }, []);

  return (
    <>
      {data ? (
        <>
          <SideBar />
          <DashboardLayoutRoot>
            <DashboardToolbar eventName={eventName} />
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <DashboardCard
                    title="AVERAGE PER GUEST"
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
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <DashboardCard
                    title="EVENT CLOSES AT"
                    iconColor="#5048E5"
                    icon={<EventNoteIcon />}
                    mainStat={"17/02/2023"}
                  >
                    <Typography color="textSecondary" variant="caption">
                      15 days left
                    </Typography>
                  </DashboardCard>
                </Grid>

                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <DashboardCard
                    title="GUESTS PAID"
                    iconColor="#FFB020"
                    icon={<GroupIcon />}
                    mainStat={
                      (data.paidGuests.current / data.paidGuests.max) * 100 +
                      "%"
                    }
                  >
                    <Box sx={{ pt: 3 }}>
                      <LinearProgress
                        value={
                          (data.paidGuests.current / data.paidGuests.max) * 100
                        }
                        variant="determinate"
                      />
                    </Box>
                  </DashboardCard>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <DashboardCard
                    title="MONEY COLLECTED"
                    iconColor="#14B8A6"
                    icon={<AttachMoneyIcon />}
                    mainStat={data.totalAmount + "$"}
                  ></DashboardCard>
                </Grid>
              </Grid>
            </Container>
          </DashboardLayoutRoot>
        </>
      ) : (
        // {/* <ShowBlessings /> */}

        <h2>"Loading..."</h2>
      )}
    </>
  );
};

export default Dashboard;
