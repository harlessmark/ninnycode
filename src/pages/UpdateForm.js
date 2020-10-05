import React, { useState } from "react";
import Cleave from "cleave.js/react";

import Img from "../styled/Img";
import P from "../styled/P";
import U from "../styled/U";
import Flash from "../styled/Flash";
import Input from "../styled/Input";
import Button from "../styled/Button";
import Legend from "../styled/Legend";

function UpdateForm(props) {
  const [flash, setFlash] = useState(null);
  const [destroy, setDestroy] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const clickHandler = () => {
    setDestroy(true);
  };

  const destroyHandler = e => {
    e.preventDefault();

    if (isDeleted === false) {
      // ensures deletion only happens once
      fetch(`${props.url}/${props.user.username}/${props.user.update_code}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
          setIsDeleted(true);
          setFlash(data);
        })
        .catch(e => setFlash("Something went wrong"));
    }
  };

  const changeHandler = e => {
    setFlash(null);
  };

  const submitHandler = e => {
    // * updates user
    e.preventDefault();

    fetch(`${props.url}/${props.user.username}/${props.user.update_code}`, {
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
    })
      .then(res => res.json())
      .then(data => {
        setFlash(data);
      })
      .catch(e => {
        setFlash({ Error: "Something went wrong" });
      });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        onChange={changeHandler}
        className='margin'>
        {props.user.avatar && (
          <Img src={props.user.avatar} className='avatar' />
        )}
        <fieldset>
          <Legend>Friend Code *</Legend>

          <Cleave
            className='cleave'
            name='friendCode'
            value={props.user.friend_code}
            options={{ blocks: [4, 4, 4], numericOnly: true }}
          />
        </fieldset>

        <fieldset>
          <Legend>Update Code *</Legend>
          <Input name='updateCode' defaultValue={props.user.update_code} />
        </fieldset>

        <fieldset>
          <Legend>Avatar</Legend>
          <Input name='avatar' defaultValue={props.user.avatar} />
        </fieldset>

        {flash && flash.Success && <Flash success>{flash.Success}</Flash>}
        {flash && flash.Error && (
          <Flash className='animate__animated animate__headShake'>
            {flash.Error}
          </Flash>
        )}

        <Button>Update</Button>
      </form>

      {destroy ? (
        <P onClick={destroyHandler}>
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
