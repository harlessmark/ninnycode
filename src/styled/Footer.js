import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

import A from "./A";
import P from "./P";

function Footer() {
  return (
    <footer>
      <P footerText>
        <A
          href='https://buymeacoffee.com/2spacemilk'
          target='_blank'
          rel='noopener noreferrer'>
          <strong>Buy Me a Coffee</strong>
          <i
            className='far fa-coffee-togo animate__animated animate__delay-4s animate__rotateOutUpRight'
            style={{ marginLeft: "5px" }}
          />
        </A>{" "}
      </P>

      <P footerText>
        <Link
          to='/privacy'
          style={{ textDecoration: "none", color: "inherit" }}>
          Privacy Policy
          <br />
        </Link>
      </P>
    </footer>
  );
}

export default Footer;

// className='animate__animated animate__headShake'
