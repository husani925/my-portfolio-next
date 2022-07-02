import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

export const Contact = () => {
  return (
    <a
      href="mailto:hola@humbersanchez.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.imgemail}>
        👉
        <Image
          src="/mail.svg"
          alt="Email Humber Sanchez Nieto"
          width={40}
          height={20}
        />
      </span>
    </a>
  );
};
