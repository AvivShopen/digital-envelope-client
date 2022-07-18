import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CenteredHeader = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
  textAlign: "center",
}));
