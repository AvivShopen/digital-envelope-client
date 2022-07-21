import { Paper, styled, Typography } from "@mui/material";

export const Header = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  textAlign: "center",
}));

export const Footer = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: "center",
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "70vw",
  minHeight: "70vh",
  display: "grid",
  placeItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
  },
}));
