import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState({
    avatar: "https://i.imgur.com/KrjUZPR.png",
    created_at: "2020-05-18T17:54:51.705934",
    friend_code: "648021374914",
    profile_views: 4370,
    tags: null,
    update_code: "GameFace4",
    username: "mark",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
