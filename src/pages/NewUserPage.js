import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Flash from "../styled/Flash";
import Legend from "../styled/Legend";
import P from "../styled/P";

function NewUserPage() {
  const [user] = useContext(UserContext);
  const [flash, setFlash] = useState(false);

  const clickHandler = () => {
    setFlash(!flash);
  };

  return (
    <div className='margin'>
      <P style={{ margin: "1rem" }}>
        Share your short link with your friends. They will be able to view your
        friend code!
      </P>

      <CopyToClipboard text={"https://ninnycode.com/" + user.username}>
        <fieldset onClick={clickHandler} className='pointer-cursor'>
          <Legend>Short Link</Legend>
          <P>
            ninnycode.com/
            <br />
            {user.username}
          </P>
          <sub>copy to clipboard</sub>
        </fieldset>
      </CopyToClipboard>

      {flash && (
        <Flash success className='animate__animated animate__bounceIn'>
          copied to clipboard
        </Flash>
      )}

      <P style={{ margin: "1rem" }}>
        Hey, listen! Keep your update link safe. You can visit it to change your
        details like your avatar and update code.
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
