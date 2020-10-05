import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import Cleave from "cleave.js/react";

import Img from "../styled/Img";
import P from "../styled/P";
import U from "../styled/U";
import Flash from "../styled/Flash";
import Input from "../styled/Input";
import Button from "../styled/Button";
import Legend from "../styled/Legend";

function UpdateForm({ api }) {
  const [user] = useContext(UserContext);
  const [flash, setFlash] = useState(null);
  const [destroy, setDestroy] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const clickHandler = () => {
    // prevents from destroying twice
    setDestroy(true);
  };

  const destroyHandler = async e => {
    e.preventDefault();

    try {
      if (isDeleted === false) {
        // ensures deletion only happens once
        const res = await fetch(`${api}/${user.username}/${user.update_code}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
        });

        const data = await res.json();
        setFlash(await data);
        setIsDeleted(true);
      }
    } catch (err) {
      setFlash("Something went wrong");
    }
  };

  const changeHandler = e => setFlash(null);

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`${api}/${user.username}/${user.update_code}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          friend_code: e.target.friendCode.value.split(" ").join(""),
          update_code: e.target.updateCode.value,
          avatar: e.target.avatar.value,
        }),
      });

      const data = await res.json();
      setFlash(await data);
    } catch (err) {
      setFlash({ Error: "Something went wrong" });
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        onChange={changeHandler}
        className='margin'>
        {user.avatar && <Img src={user.avatar} className='avatar' />}
        <fieldset>
          <Legend>Friend Code *</Legend>

          <Cleave
            className='cleave'
            name='friendCode'
            value={user.friend_code}
            options={{ blocks: [4, 4, 4], numericOnly: true }}
          />
        </fieldset>

        <fieldset>
          <Legend>Update Code *</Legend>
          <Input name='updateCode' defaultValue={user.update_code} />
        </fieldset>

        <fieldset>
          <Legend>Avatar</Legend>
          <Input name='avatar' defaultValue={user.avatar} />
        </fieldset>

        {flash && flash.Success && (
          <Flash className='animate__animated animate__rubberBand' success>
            {flash.Success}
          </Flash>
        )}
        {flash && flash.Error && (
          <Flash className='animate__animated animate__headShake'>
            {flash.Error}
          </Flash>
        )}

        <Button>Update</Button>
      </form>

      {destroy ? (
        <P
          onClick={destroyHandler}
          className='animate__animated animate__headShake'>
          <U red>Are you sure?</U>
        </P>
      ) : (
        <P onClick={clickHandler}>
          <U>Delete account</U>
        </P>
      )}
    </div>
  );
}

export default UpdateForm;
