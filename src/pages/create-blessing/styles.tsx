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
  fontSize: "3.5rem",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.7rem",
  },
}));

export const Submit = styled(Button)(({ theme }) => ({
  width: "35%",
  height: "5vh",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
}));
