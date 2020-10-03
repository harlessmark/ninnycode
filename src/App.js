import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import LeftStripe from "./components/LeftStripe";
import RightStripe from "./components/RightStripe";
import Container from "./components/Container";
import Footer from "./styled/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className='wrapper'>
        <LeftStripe />
        <Container />
        <RightStripe />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
