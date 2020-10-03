import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Profile from "../pages/Profile";
// import NoUser from "../components/NoUser";

function ProfileContainer(props) {
  const [user, setUser] = useState(null);
  const { username } = useParams("/:username");

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(props.api + "/" + username);
      const data = await res.json();

      setUser(await data);
    };
    getUser();
  }, [props.api, username]);

  return <div> {user ? <Profile user={user} /> : null}</div>;
}

export default ProfileContainer;
