import React from "react";
// import { Link } from "react-router-dom";

import SignUpForm from "../pages/SignUpForm";
import Logo from "../logo";
import About from "./About";

function Home(props) {
  return (
    <div className='wrapper-padding'>
      <div>
        {/* <Link to='/'> */}
        <Logo />
        {/* </Link> */}
      </div>

      <SignUpForm
        submitHandler={props.submitHandler}
        flash={props.flash}
        isLoading={props.isLoading}
        changeHandler={props.changeHandler}
      />

      <About animation={props.animation} />
    </div>
  );
}

export default Home;
