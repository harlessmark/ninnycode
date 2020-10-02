import React from "react";

import P from "../styled/P";
import A from "../styled/A";
import U from "../styled/U";

function PrivacyPolicy() {
  return (
    <P style={{ height: "22.2rem", paddingTop: "1rem" }}>
      Ninny Code! uses{" "}
      <U>
        <A
          href='https://policies.google.com/privacy?hl=en'
          target='_blank'
          rel='noopener noreferrer'>
          Google Analytics
        </A>
      </U>{" "}
      to get basic traffic information such as time and pages visited, referring
      site details, web browser, ect. Users create their username and provide
      their Nintendo Switch friend code. No additional information is collected.
      Please email Mark at 2spacemilk [at] gmail dotCom if you have any
      questions about this privacy policy.
    </P>
  );
}

export default PrivacyPolicy;
