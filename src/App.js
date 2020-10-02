import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import LeftStripe from "./components/LeftStripe";
import RightStripe from "./components/RightStripe";
import Container from "./components/Container";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./styled/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className='wrapper'>
        <LeftStripe />

        <Switch>
          <Route exact path='/' component={Container} />
          <Route exact path='/privacy' component={PrivacyPolicy} />
        </Switch>

        <RightStripe />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
