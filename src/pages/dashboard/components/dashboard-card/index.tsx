import { Paper, Typography, Box } from "@mui/material";
import React from "react";

interface DashboardProps {
  title: string;
  children: React.ReactNode;
}

const DashboardCard: React.FC<DashboardProps> = ({ children, title }) => {
  return (
    <Paper>
      <Typography>{title}</Typography>
      <Box>{children}</Box>
    </Paper>
  );
};

export default DashboardCard;
