import React from "react";
// import { Link } from "react-router-dom";
import Sub from "./Sub";
import A from "./A";

function Footer() {
  return (
    <footer>
      <A
        href='https://buymeacoffee.com/2spacemilk'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: "white", backgroundColor: "#1a1718" }}>
        Buy me a coffee
      </A>

      <Sub privacy>
        {/* <Link
          to='/privacy'
          style={{ textDecoration: "none", color: "inherit" }}>
          Privacy Policy
        </Link> */}
      </Sub>

      <Sub>Ninny Code! is not affilliated with Nintendo</Sub>
    </footer>
  );
}

export default Footer;
