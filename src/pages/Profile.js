import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import UserProfile from "../components/UserProfile";
// import NoUser from "../components/NoUser";
import Logo from "../logo";

function Profile(props) {
  const [user, setUser] = useState(null);
  const { username } = useParams("/:username");

  useEffect(() => {
    fetch(props.url + "/" + username)
      .then(res => res.json())
      .then(user => {
        if (!user.Error) {
          setUser(user);
        }
      });
  }, [props.url, username]);

  return (
    <div className='main-padding'>
      {/* 
      {user ? <UserProfile user={user} /> : <NoUser />} */}
    </div>
  );
}

export default Profile;
