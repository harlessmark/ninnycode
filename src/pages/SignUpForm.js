import React from "react";
import Cleave from "cleave.js/react";

import Legend from "../styled/Legend";
import Input from "../styled/Input";
import Button from "../styled/Button";
import Flash from "../styled/Flash";

function SignUpForm(props) {
  return (
    <form>
      <fieldset className='add-margin'>
        <Legend>
          <label htmlFor='signup'>Username</label>
        </Legend>
        <Input
          htmlFor='signup'
          onChange={props.changeHandler}
          type='text'
          name='username'
          maxLength='12'
          autocapitalize='none'
        />
      </fieldset>

      <fieldset className='add-margin'>
        <Legend>
          <label htmlFor='signup'>Friend Code</label>
        </Legend>

        <Cleave
          htmlFor='signup'
          type='tel'
          onChange={props.changeHandler}
          className='cleave'
          name='friendCode'
          options={{ blocks: [4, 4, 4], numericOnly: true }}
        />
      </fieldset>

      {props.flash ? <Flash>{props.flash}</Flash> : null}

      <Button className='add-margin'>Create</Button>
    </form>
  );
}

export default SignUpForm;
