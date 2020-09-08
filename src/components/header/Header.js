import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>
            Movies
          </NavLink>
          <NavLink className={styles.link} to="movie/lukeskywalker" end>
            Movies With Luke Skywalker
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
