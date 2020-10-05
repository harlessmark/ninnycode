import React, { useContext } from "react";
import { UserContext } from "../UserContext";

import NewUserPage from "../pages/NewUserPage";
import SignUpForm from "../pages/SignUpForm";

function NewUserContainer({ api }) {
  const [user] = useContext(UserContext);

  // redirects to NewUserPage after user creation
  return <div>{user ? <NewUserPage /> : <SignUpForm api={api} />}</div>;
}

export default NewUserContainer;
