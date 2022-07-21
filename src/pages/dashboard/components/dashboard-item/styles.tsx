import { Avatar, Card, styled } from "@mui/material";

export const DashboardItemCard = styled(Card)(({ theme }) => ({
  height: "100%",
}));

export const DashboardItemIcon = styled(Avatar)<{ iconColor: string }>(
  (props) => ({
    backgroundColor: props.iconColor,
    height: 56,
    width: 56,
  })
);
