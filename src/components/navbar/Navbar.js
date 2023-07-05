import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.logo} src={logo.src} />
      </div>

      <ul>
        <li>
          <a className={styles.button} href="/">Main</a>
        </li>
        <li>
          <a className={styles.button} href="/newQuestion">Ask a question</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
