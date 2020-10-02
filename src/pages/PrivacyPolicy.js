import React from "react";
import { Link } from "react-router-dom";
import P from "../styled/P";
import A from "../styled/A";
import U from "../styled/U";
import Logo from "../logo";

function PrivacyPolicy() {
  return (
    <div className='wrapper-padding'>
      <Link to='/'>
        <Logo />
      </Link>

      <P>
        Ninny Code! uses{" "}
        <U>
          <A
            href='https://policies.google.com/privacy?hl=en'
            target='_blank'
            rel='noopener noreferrer'>
            Google Analytics
          </A>
        </U>{" "}
        to get basic traffic information such as time and pages visited,
        referring site details, web browser, ect. Users create their username
        and provide their Nintendo Switch friend code. No additional information
        is collected. Please email Mark at 2spacemilk [at] gmail dotCom if you
        have any questions about this privacy policy.
      </P>
    </div>
  );
}

export default PrivacyPolicy;
