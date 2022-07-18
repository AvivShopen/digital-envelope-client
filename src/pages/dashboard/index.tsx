import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledProgressBar from "../../components/StyledProgressBar";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import IDashboard from "../../types/dashboard";
import ShowBlessings from "./components/show-blessings";
import DashboardCard from "./components/dashboard-card";
import { GridContainer, Layout } from "./styles";
import { CenteredHeader } from "../../components/CenteredHeader";

const Dashboard = () => {
  const { eventId } = useEventStore();
  const [data, setData] = useState<IDashboard>();
  const [eventName, setEventName] = useState<String>("");

  const fetchData = async () => {
    const { data } = await useApi.dashboard().getData(8);
    setData((prev) => data);
    console.log(data);
  };

  useEffect(() => {
    // fetchData();
    const mockData: IDashboard = {
      averagePerGuest: 120,
      paidGuests: {
        current: 5,
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
        <Layout>
          <CenteredHeader>{eventName}</CenteredHeader>
          <GridContainer>
            <DashboardCard title="Average per guest">
              <Typography>
                {Math.floor(data?.averagePerGuest!) + " $"}
              </Typography>
            </DashboardCard>

            <DashboardCard title="Total amount collected">
              <Typography>{data?.totalAmount + " $"}</Typography>
            </DashboardCard>

            <DashboardCard title="Total guests paid">
              <StyledProgressBar
                variant="determinate"
                value={(data.paidGuests.current * 100) / data.paidGuests.max}
              />
              <Typography>
                {data.paidGuests.current + " / " + data.paidGuests.max}
              </Typography>
            </DashboardCard>
          </GridContainer>
          <ShowBlessings />
        </Layout>
      ) : (
        <h2>"Loading..."</h2>
      )}
    </>
  );
};

export default Dashboard;
