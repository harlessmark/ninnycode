import React from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Flash from "../styled/Flash";
import Sub from "../styled/Sub";
import Legend from "../styled/Legend";
import P from "../styled/P";

function NewUser(props) {
  return (
    <div className='main-padding'>
      <P>
        Share your short link with your friends. They will be able to view your
        friend code!
      </P>

      <CopyToClipboard
        className='pointer-cursor'
        text={"https://ninnycode.com/" + props.user.username}>
        <fieldset onClick={props.clickHandler}>
          <Legend>Short Link</Legend>
          <P big>
            ninnycode.com/
            <br />
            {props.user.username}
          </P>
          <Sub style={{ color: "#1a1718" }}>copy to clipboard</Sub>
        </fieldset>
      </CopyToClipboard>

      {props.flash && <Flash success>Copied to clipboard!</Flash>}

      <P>
        Hey, listen! Keep your update link safe. You can visit it to change your
        details like your avatar.
      </P>
      <Link
        to={{ pathname: `/${props.user.username}/${props.user.update_code}` }}
        style={{ textDecoration: "none", color: "inherit" }}>
        <fieldset>
          <Legend>Update Link</Legend>
          <P big>
            ninnycode.com/
            <br />
            {props.user.username}/
            <br />
            {props.user.update_code}
          </P>
          <Sub style={{ color: "#1a1718" }}>update details</Sub>
        </fieldset>
      </Link>
    </div>
  );
}

export default NewUser;
