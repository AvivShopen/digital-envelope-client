import { AppBar, Avatar, Box, IconButton, Typography } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";
import theme from "../../theme";

export const RowAppBar = styled(AppBar)(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  height: "5vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBotton: theme.spacing(2),
}));

export const LogoHeader = styled(Typography)(({ theme }) => ({
  letterSpacing: ".2rem",
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  textDecoration: "none",
  cursor: "pointer",
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  alignSelf: "right",
  marginRight: theme.spacing(1),
}));
