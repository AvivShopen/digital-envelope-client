import React from "react";
import { useNavigate } from "react-router-dom";
import OutlinedButton from "../common/OutlinedButton";
import styles from "./header.module.css";

const Header: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.bar}>
      <h3 className={styles.logo}>Digital Envelope</h3>
      <OutlinedButton className={styles.button} onClick={() => navigate("/")}>
        Get started
      </OutlinedButton>
    </div>
  );
};

export default Header;
