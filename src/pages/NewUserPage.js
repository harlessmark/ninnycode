import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Flash from "../styled/Flash";
import Legend from "../styled/Legend";
import P from "../styled/P";

function NewUserPage(props) {
  const [user] = useContext(UserContext);

  return (
    <div className='margin'>
      <P style={{ margin: "1rem" }}>
        Share your short link with your friends. They will be able to view your
        friend code!
      </P>

      <CopyToClipboard text={"https://ninnycode.com/" + user.username}>
        <fieldset onClick={props.clickHandler}>
          <Legend>Short Link</Legend>
          <P>
            ninnycode.com/
            <br />
            {user.username}
          </P>
          <sub>copy to clipboard</sub>
        </fieldset>
      </CopyToClipboard>

      {props.flash && <Flash success>Copied to clipboard!</Flash>}

      <P style={{ margin: "1rem" }}>
        Hey, listen! Keep your update link safe. You can visit it to change your
        details like your avatar.
      </P>

      <Link
        to={{ pathname: `/${user.username}/${user.update_code}` }}
        className='strip-decoration'>
        <fieldset>
          <Legend>Update Link</Legend>
          <P>
            ninnycode.com/
            <br />
            {user.username}/
            <br />
            {user.update_code}
          </P>
          <sub>update details</sub>
        </fieldset>
      </Link>
    </div>
  );
}

export default NewUserPage;
