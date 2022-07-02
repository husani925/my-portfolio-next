import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Navbar = () => {
  return (
    <ul className={styles.listul}>
      <li className={styles.list}>
        <Link href="/">
          <a>Incio &rarr;</a>
        </Link>
      </li>
      <li className={styles.list}>
        <Link href="/projects">
          <a>Proyectos &rarr;</a>
        </Link>
      </li>
    </ul>
  );
};
