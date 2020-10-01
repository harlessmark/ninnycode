import React from "react";
import "./App.css";

import LeftStripe from "./components/LeftStripe";
import RightStripe from "./components/RightStripe";
import Container from "./components/Container";
import Footer from "./styled/Footer";

function App() {
  return (
    <div>
      <div className='wrapper'>
        <LeftStripe />
        <Container />
        <RightStripe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
