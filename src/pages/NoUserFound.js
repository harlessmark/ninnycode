import React from "react";
import { Link } from "react-router-dom";

import Img from "../styled/Img";
import P from "../styled/P";
import U from "../styled/U";

function NoUserFound() {
  return (
    <div>
      <div>
        <Img
          src='https://art.pixilart.com/4345c1bdceea489.png'
          alt='Nintendo ghost boo'
          boo
        />
      </div>

      <Link to='/' className='strip-decoration'>
        <P>
          User not found! Get your own <U>link</U> instead?
        </P>
      </Link>
    </div>
  );
}

export default NoUserFound;
