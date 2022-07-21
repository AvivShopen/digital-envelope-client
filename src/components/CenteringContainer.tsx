import { Box, styled } from "@mui/material";

const CenteringContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexGrow: 1,
  minHeight: "100%",
  justifyContent: "center",
}));

export default CenteringContainer;
