import React, { useState } from "react";
import Cleave from "cleave.js/react";

import Legend from "../styled/Legend";
import Input from "../styled/Input";
import Button from "../styled/Button";
import Flash from "../styled/Flash";

function SignUpForm() {
  const [inputs, setInputs] = useState({});
  const [flash, setFlash] = useState(null);

  const changeHandler = e => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const res = await fetch("https://ninnycode-b.herokuapp.com/api", {
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
        // setUser(data);
      }
    } catch (err) {
      setFlash("Something went wrong");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset className='add-margin'>
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

      <fieldset className='add-margin'>
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

      <Button style={{ marginTop: "1rem" }}>Create</Button>
    </form>
  );
}

export default SignUpForm;
