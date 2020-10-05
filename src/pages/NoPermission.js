import React from "react";
import { Link } from "react-router-dom";

import P from "../styled/P";
import U from "../styled/U";

function NoPermission() {
  return (
    <div>
      <P style={{ margin: "1rem 0" }}>
        You don't have permission to view this page. Perhaps, you should{" "}
        <Link to='/' className='strip-decoration'>
          <U>create</U>
        </Link>{" "}
        your own profile?
      </P>
    </div>
  );
}

export default NoPermission;
