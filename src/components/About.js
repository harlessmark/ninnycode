import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

import P from "../styled/P";
import U from "../styled/U";

function About() {
  return (
    <P className='animated fadeIn delay-1s'>
      Ninny Code! helps you easily share your Nintendo Switch{" "}
      <Tippy
        content='Located in your Profile'
        placement='left'
        animation='shift-away'>
        <U>friend code</U>
      </Tippy>{" "}
      by creating a short link for you to give to your friends.
    </P>
  );
}

export default About;
