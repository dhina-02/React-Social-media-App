import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="Footer">&copy;Copyrights {date.getFullYear()}</footer>
  );
};

export default Footer;
