import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Profile from "../pages/Profile";
import NoUserFound from "../pages/NoUserFound";

function ProfileContainer(props) {
  const [user, setUser] = useState(null);
  const { username } = useParams("/:username");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(props.api + "/" + username);
        const data = await res.json();

        if (!data.Error) setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [props.api, username]);

  return <div>{user ? <Profile user={user} /> : <NoUserFound />}</div>;
}

export default ProfileContainer;
