import { Box, Paper, styled, Typography } from "@mui/material";

export const DashboardPaper = styled(Paper)(({ theme }) => ({
  width: "25%",
  height: "45%",
}));

export const DashboradItemHeader = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingTop: "1vh",
}));

export const StatsChildren = styled(Box)(({ theme }) => ({
  width: "95%",
  height: "70%",
  display: "grid",
  placeItems: "center",
}));
