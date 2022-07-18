import { Button, Paper, styled, Typography } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "90vw",
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: "70vw",
  },
}));

export const Submit = styled(Button)(({ theme }) => ({
  width: "35%",
  height: "5vh",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
}));
