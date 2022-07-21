import { Grid, GridProps, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  paddingTop: 64,
}));

export const StatBox = styled(Box)(({ theme }) => ({
  paddingTop: 6,
  display: "flex",
  alignItems: "center",
}));

export const StyledGrid = styled((props: GridProps) => (
  <Grid item lg={4} sm={6} xl={3} xs={12} {...props} />
))(({ theme }) => ({}));
