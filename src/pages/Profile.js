import React from "react";
import { Link } from "react-router-dom";
import Cleave from "cleave.js/react";
import "animate.css";

import Legend from "../styled/Legend";
import Img from "../styled/Img";
import P from "../styled/P";
import U from "../styled/U";

function Profile(props) {
  const { avatar, username, friend_code } = props.user;

  return (
    <div className='user-profile'>
      <Img
        src={avatar}
        alt='user avatar'
        className='avatar animate__animated animate__pulse animate__infinite animate__slow'
      />

      <P style={{ margin: "1rem 0", fontSize: "2rem" }}>
        {username}

        {username === "mark" || username === "cait" ? (
          <i className='fas fa-star fa-sm star animate__animated animate__slideInRight' />
        ) : null}
      </P>

      <P style={{ margin: "2rem 0" }}>
        Your friend wants to play! Add their friend code to your Nintendo
        Switch.
      </P>

      <fieldset>
        <Legend>Friend Code</Legend>

        <Cleave
          className='cleave'
          type='tel'
          value={friend_code}
          options={{ blocks: [4, 4, 4], numericOnly: true }}
        />
      </fieldset>

      <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
        <P style={{ marginTop: "2rem" }}>
          <U>Get your link</U>
        </P>
      </Link>
    </div>
  );
}

export default Profile;
