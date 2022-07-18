import { Box, styled, Typography } from "@mui/material";

export const GridContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "20vh",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100vw",
  height: "45vh",
}));

export const Layout = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "grid",
  placeItems: "center",
}));
