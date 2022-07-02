import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
        Patrocinado por
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};
