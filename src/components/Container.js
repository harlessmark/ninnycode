import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Logo from "../logo";

import NewUserContainer from "../components/NewUserContainer";
import ProfileContainer from "../components/ProfileContainer";
import UpdateContainer from "../components/UpdateContainer";
import PrivacyPolicy from "../pages/PrivacyPolicy";

function Container() {
  const api = "https://ninnycode-b.herokuapp.com/api";

  return (
    <div className='container'>
      <Link to='/'>
        <Logo />
      </Link>

      <Switch>
        <Route
          exact
          path='/'
          component={() => <NewUserContainer api={api} />}
        />
        <Route exact path='/privacy' component={PrivacyPolicy} />
        <Route
          exact
          path='/:username'
          component={() => <ProfileContainer api={api} />}
        />
        <Route
          exact
          path='/:username/:updateCode'
          render={() => <UpdateContainer api={api} />}
        />
      </Switch>
    </div>
  );
}

export default Container;
