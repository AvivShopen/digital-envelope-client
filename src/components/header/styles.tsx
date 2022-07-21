import { Box, Divider, styled } from "@mui/material";

export const SidebarPlaceholder = styled(Box)(({ theme }) => ({
  width: 300,
  height: "100%",
  marginRight: 15,
}));

export const RowBar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export const AccountSection = styled(Box)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  borderRadius: 1,
  px: 3,
  py: "11px",
}));

export const NavDivider = styled(Divider)(({ theme }) => ({
  borderColor: "#2D3748",
  my: 2,
}));
