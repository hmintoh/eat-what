import React from "react";
import styles from "@/components/footer/styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        &copy; {new Date().getFullYear()} by{" "}
        <a href="https://www.thuimin.com/" target="_blank" rel="noreferrer">
          hmintoh
        </a>
        . made with ♡ in singapore.
      </span>
    </footer>
  );
};

export default Footer;
