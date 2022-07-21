import {
  AddBox,
  AddOutlined,
  Celebration,
  Edit,
  Leaderboard,
  List,
  Menu,
  QrCode,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  Drawer,
  Paper,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import NavItem, { NavItemProps } from "./components/nav-item";
import { AccountSection, NavDivider, RowBar } from "./styles";

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
    icon: <Edit />,
    title: "Edit event",
  },
  {
    link: "/events",
    icon: <Celebration />,
    title: "My events",
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
      <Stack direction="row" sx={{ p: 2 }}>
        <Typography variant="h5">Digital Envelope</Typography>
      </Stack>

      <NavDivider />
      <Box sx={{ flexGrow: 1 }}>
        {links.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </Box>
    </RowBar>
  );

  if (lgOrXL) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {items}
      </Drawer>
    );
  } else if (!isOpen)
    return (
      <Card>
        <Menu onClick={() => setIsOpen(!isOpen)} sx={{ p: 1 }} />
      </Card>
    );
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {items}
    </Drawer>
  );
};

export default SideBar;
