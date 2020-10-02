import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Logo from "../logo";
import SignUpForm from "../pages/SignUpForm";
import PrivacyPolicy from "../pages/PrivacyPolicy";

function Container() {
  return (
    <div className='container-padding'>
      <Link to='/'>
        <Logo />
      </Link>

      <Switch>
        <Route exact path='/' component={SignUpForm} />
        <Route exact path='/privacy' component={PrivacyPolicy} />
      </Switch>
    </div>
  );
}

export default Container;
