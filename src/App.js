import React, { useEffect } from "react";
import "./App.css";
import ReactGa from "react-ga";
import "animate.css";

import LeftStripe from "./components/LeftStripe";
import RightStripe from "./components/RightStripe";
import Container from "./components/Container";
import Footer from "./styled/Footer";

function App() {
  useEffect(() => {
    // Google Analytics
    ReactGa.initialize("UA-179614081-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='animate__animated animate__fadeIn animate__faster animate__delay-1s'>
      <div className='wrapper'>
        <LeftStripe />
        <main>
          <Container />
        </main>
        <RightStripe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
