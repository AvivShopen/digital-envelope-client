import { Mail } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoHeader, RowAppBar, StyledAvatar } from "./styles";

const Header: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <RowAppBar>
      <LogoHeader onClick={() => navigate("/")}>Digital Envelope</LogoHeader>
      <Mail />
      {/* <StyledAvatar>GP</StyledAvatar> */}
    </RowAppBar>
  );
};

export default Header;
