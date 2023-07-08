import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">
          <img className={styles.logo} src={logo.src} alt="Logo" />
        </Link>
      </div>

      <ul>
        <li>
          <a className={styles.button} href="/login">Login</a>
        </li>
        <li>
          <a className={styles.button} href="/newQuestion">Ask a question</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
