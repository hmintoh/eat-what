import React from "react";

import { FooterContainer } from "@/styles/footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        &copy; {new Date().getFullYear()} by{" "}
        <a href="https://www.thuimin.com/" target="_blank" rel="noreferrer">
          hmintoh
        </a>
        . made with ♡ in singapore.
      </span>
    </FooterContainer>
  );
};

export default Footer;
