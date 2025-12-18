import React from "react";

function Footer() {
    const today= new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {today} Bengaluru Tourism</p>
    </footer>
  );
}

export default Footer;
