import React from "react";
// import { Link } from "react-router-dom";

import Logo from "../logo";
import SignUpForm from "../pages/SignUpForm";
import About from "./About";

function Container(props) {
  return (
    <div className='wrapper-padding'>
      {/* <Link to='/'> */}
      <Logo />
      {/* </Link> */}

      <SignUpForm
        submitHandler={props.submitHandler}
        flash={props.flash}
        isLoading={props.isLoading}
        changeHandler={props.changeHandler}
      />

      <About />
    </div>
  );
}

export default Container;
