import React, { useState } from "react";
import Cleave from "cleave.js/react";

import Img from "../styled/Img";
import P from "../styled/P";
import U from "../styled/U";
import Flash from "../styled/Flash";
import Input from "../styled/Input";
import Button from "../styled/Button";
import Legend from "../styled/Legend";

// TODO finish this pages

function UpdateForm(props) {
  const [flash, setFlash] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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

    debugger;

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
      .then(setIsLoading(true))
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setFlash(data);
      })
      .catch(e => {
        console.log(e);

        setIsLoading(false);
        setFlash({ Error: "Something went wrong" });
      });
  };

  return (
    <>
      <form onSubmit={submitHandler} onChange={changeHandler}>
        {props.user.avatar && (
          <Img src={props.user.avatar} style={{ paddingBottom: "2rem" }} />
        )}
        <fieldset>
          <Legend>
            Friend Code <span className='required'>*</span>
          </Legend>

          <Cleave
            className='cleave'
            name='friendCode'
            value={props.user.friend_code}
            options={{ blocks: [4, 4, 4], numericOnly: true }}
          />
        </fieldset>

        <fieldset>
          <Legend>
            Update Code <span className='required'>*</span>
          </Legend>
          <Input name='updateCode' defaultValue={props.user.update_code} />
        </fieldset>

        <fieldset>
          <Legend>Avatar</Legend>
          <Input name='avatar' defaultValue={props.user.avatar} />
        </fieldset>

        {flash && flash.Success && (
          <Flash success className='animated bounceIn'>
            {flash.Success}
          </Flash>
        )}
        {flash && flash.Error && (
          <Flash className='animated shake'>{flash.Error}</Flash>
        )}

        <Button style={{ marginBottom: "2rem" }} isLoading={isLoading}>
          Update{" "}
        </Button>
      </form>

      {destroy ? (
        <P
          className='margin-bottom animated heartBeat'
          onClick={destroyHandler}>
          <U red>Are you sure?</U>
        </P>
      ) : (
        <P onClick={clickHandler}>
          <U>Delete account</U>
        </P>
      )}
    </>
  );
}

export default UpdateForm;
