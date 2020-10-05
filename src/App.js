import React from "react";
import "./App.css";
import { UserProvider } from "./UserContext";
import "animate.css";

import LeftStripe from "./components/LeftStripe";
import RightStripe from "./components/RightStripe";
import Container from "./components/Container";
import Footer from "./styled/Footer";

// TODO add analytics

function App() {
  return (
    <div className='animate__animated animate__fadeIn animate__faster animate__delay-1s'>
      <div className='wrapper'>
        <LeftStripe />
        <main>
          <UserProvider>
            <Container />
          </UserProvider>
        </main>
        <RightStripe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
