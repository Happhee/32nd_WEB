import React from "react";
import styles from "../styles/Header.module.css";

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>햅히햅히한 {title}💛</h1>
    </header>
  );
};

export default Header;
