import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Mario Galan Soto </p>
    </footer>
  );
}

export default Footer;
