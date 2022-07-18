import { styled } from "@mui/material/styles";

export const PageContainer = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  m: -1,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
