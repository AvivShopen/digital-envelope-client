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

export const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const Submit = styled(Button)(({ theme }) => ({}));
