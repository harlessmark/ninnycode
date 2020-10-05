import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import Cleave from "cleave.js/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

import Legend from "../styled/Legend";
import Input from "../styled/Input";
import Button from "../styled/Button";
import Flash from "../styled/Flash";
import P from "../styled/P";
import U from "../styled/U";

function SignUpForm(props) {
  const [inputs, setInputs] = useState({});
  const [flash, setFlash] = useState(null);
  const [setUser] = useContext(UserContext);

  const changeHandler = e => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const res = await fetch(props.api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: inputs.username.toLowerCase(),
          friend_code: inputs.friendCode.split(" ").join(""),
        }),
      });

      const data = await res.json();

      if (data.Error) {
        setFlash(data.Error);
      } else {
        setUser(data);
      }
    } catch (err) {
      setFlash("Something went wrong");
    }
  };

  return (
    <form onSubmit={submitHandler} className='margin'>
      <fieldset>
        <Legend>
          <label htmlFor='signup'>Username</label>
        </Legend>

        <Input
          type='text'
          maxLength='12'
          name='username'
          htmlFor='signup'
          autocapitalize='none'
          onChange={changeHandler}
        />
      </fieldset>

      <fieldset>
        <Legend>
          <label htmlFor='signup'>Friend Code</label>
        </Legend>

        <Cleave
          type='tel'
          htmlFor='signup'
          name='friendCode'
          className='cleave'
          onChange={changeHandler}
          options={{ blocks: [4, 4, 4], numericOnly: true }}
        />
      </fieldset>

      {flash && <Flash>{flash}</Flash>}

      <Button style={{ margin: "1rem 0" }}>Create</Button>

      <P aboutText>
        Ninny Code! helps you easily share your Nintendo Switch{" "}
        <Tippy
          content='Located in your Profile'
          placement='left'
          animation='shift-away'>
          <U>friend code</U>
        </Tippy>{" "}
        by creating a short link for you to give to your friends.
      </P>
    </form>
  );
}

export default SignUpForm;
