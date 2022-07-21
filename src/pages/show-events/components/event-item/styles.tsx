import { Box, Card, Grid, styled } from "@mui/material";

export const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingBottom: 3,
}));

export const CenteredGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
}));
