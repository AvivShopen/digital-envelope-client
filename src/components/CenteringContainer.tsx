import { Box, styled } from "@mui/material";

const CenteringContainer = styled(Box)(({ theme }) => ({
  height: "90vh",
  display: "grid",
  placeContent: "center",
}));

export default CenteringContainer;
