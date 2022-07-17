import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledProgressBar from "../../components/StyledProgressBar";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import IDashboard from "../../types/dashboard";
import ShowBlessings from "./components/show-blessings/ShowBlessings";
import DashboardCard from "./components/dashboard-card";

const Dashboard = () => {
  const { eventId } = useEventStore();
  const [data, setData] = useState<IDashboard>();
  const fetchData = async () => {
    const { data } = await useApi.dashboard().getData(8);
    setData((prev) => data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {data ? (
          <Box>
            <DashboardCard title="Average per guest">
              <h3>{Math.floor(data?.averagePerGuest!) + " $"}</h3>
            </DashboardCard>

            <DashboardCard title="Total amount collected">
              <span>{data?.totalAmount}</span>
            </DashboardCard>

            <DashboardCard title="Total guests paid">
              <StyledProgressBar
                variant="determinate"
                value={(data!.paidGuests.current * 100) / data!.paidGuests.max}
              />
            </DashboardCard>
            <Typography>
              {data?.paidGuests.current} / {data?.paidGuests.max}
            </Typography>
          </Box>
        ) : (
          "Loading..."
        )}
      </div>
      <ShowBlessings />
    </>
  );
};

export default Dashboard;
