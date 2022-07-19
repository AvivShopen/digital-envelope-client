import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const StatBox = styled(Box)(({ theme }) => ({
  paddingTop: 6,
  display: "flex",
  alignItems: "center",
}));
