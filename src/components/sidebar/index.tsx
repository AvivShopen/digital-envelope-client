import {
  AddBox,
  Celebration,
  Settings,
  Leaderboard,
  List,
  Menu,
  QrCode,
  Logout,
  LogoutRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  Drawer,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import NavItem, { NavItemProps } from "./components/nav-item";
import {
  AccountSection,
  NavDivider,
  RowBar,
  SidebarPlaceholder,
} from "./styles";

const links: NavItemProps[] = [
  {
    link: "/event/create",
    icon: <AddBox />,
    title: "Create Event",
  },
  {
    link: "/dashboard",
    icon: <Leaderboard />,
    title: "Overview",
  },
  {
    link: "/blessings",
    icon: <List />,
    title: "Blessings",
  },
  {
    link: "/qr",
    icon: <QrCode />,
    title: "Generate Qr",
  },
  {
    link: "/event/edit",
    icon: <Settings />,
    title: "Event Settings",
  },
  {
    link: "/events",
    icon: <Celebration />,
    title: "My Events",
  },
];

const SideBar = () => {
  const lgOrXL = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
    defaultMatches: true,
  });
  const [isOpen, setIsOpen] = useState(false);

  const items = (
    <RowBar>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Digital Envelope</Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <AccountSection>
          <Avatar
            alt="Omer Gal"
            src="https://lh3.googleusercontent.com/a-/AFdZucpOjKoBp_dBEwTNwWq0fVcjTxmgFnkmVbheH4DECQ=s96-c"
            sx={{ width: 32, height: 32, mr: 2 }}
          />
          <Typography variant="subtitle1">Omer Gal</Typography>
        </AccountSection>
      </Box>
      <NavDivider />
      <Box sx={{ flexGrow: 1 }}>
        {links.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </Box>
    </RowBar>
  );

  return (
    <>
      {!lgOrXL && !isOpen && (
        <Box sx={{ display: "block", position: "fixed" }}>
          <Card>
            <Menu onClick={() => setIsOpen(!isOpen)} sx={{ p: 1 }} />
          </Card>
        </Box>
      )}
      {lgOrXL && <SidebarPlaceholder />}
      <Drawer
        anchor="left"
        open={lgOrXL || isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
        variant={lgOrXL ? "permanent" : "temporary"}
      >
        {items}
      </Drawer>
    </>
  );
};

export default SideBar;
