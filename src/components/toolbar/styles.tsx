import { styled } from "@mui/material/styles";

export const ToolbarContainer = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  paddingLeft: 20,
  paddingRight: 20,
  justifyContent: "space-between",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
