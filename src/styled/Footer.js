import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

import A from "./A";
import P from "./P";

function Footer() {
  return (
    <footer>
      <P footerText>
        <Link to='/privacy' className='strip-decoration'>
          Privacy Policy
          <br />
        </Link>
      </P>
    </footer>
  );
}

export default Footer;
