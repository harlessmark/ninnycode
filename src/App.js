import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";
import "animate.css";

import LeftStripe from "./components/LeftStripe";
import RightStripe from "./components/RightStripe";
import Container from "./components/Container";
import Footer from "./styled/Footer";

// TODO add analytics

function App() {
  return (
    <BrowserRouter>
      <div className='animate__animated animate__fadeIn animate__delay-1s'>
        <main className='wrapper'>
          <LeftStripe />
          <UserProvider>
            <Container />
          </UserProvider>
          <RightStripe />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
