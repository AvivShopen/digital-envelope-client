import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.bar}>
      <h3 className={styles.logo} onClick={() => navigate("/")}>
        Digital Envelope
      </h3>
      <Button className={styles.button} onClick={() => navigate("/")}>
        Get started
      </Button>
    </div>
  );
};

export default Header;
