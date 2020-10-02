import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo";
import SignUpForm from "../pages/SignUpForm";
import About from "./About";

function Container() {
  return (
    <div className='wrapper-padding'>
      <Link to='/'>
        <Logo />
      </Link>

      <SignUpForm
      // flash={props.flash}
      // isLoading={props.isLoading}
      />

      <About />
    </div>
  );
}

export default Container;
