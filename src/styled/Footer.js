import React from "react";
// import { Link } from "react-router-dom";
import A from "./A";
import P from "./P";

function Footer() {
  return (
    <footer>
      <P footerText>
        <strong>
          <A
            href='https://buymeacoffee.com/2spacemilk'
            target='_blank'
            rel='noopener noreferrer'>
            Buy Me a Coffee
          </A>{" "}
        </strong>
        | <strong>Privacy Policy</strong> <br />
        {/* <P>
        <Link
          to='/privacy'
          style={{ textDecoration: "none", color: "inherit" }}>
          Privacy Policy
        </Link>
      </P> */}
        Ninny Code! is not affilliated with Nintendo
      </P>
    </footer>
  );
}

export default Footer;
