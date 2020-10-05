import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";

import NoPermission from "../pages/NoPermission";
import UpdateForm from "../pages/UpdateForm";

function UpdateContainer({ api }) {
  const { username, updateCode } = useParams("/:username/:updateCode");
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`${api}/${username}/${updateCode}`);
        const data = await res.json();

        if (!data.Error) {
          setUser(await data);
        }
      } catch (err) {
        setUser({ Error: "Something went wrong" });
      }
    };
    getUser();
  }, [api, username, updateCode, setUser]);

  return <div>{user ? <UpdateForm api={api} /> : <NoPermission />}</div>;
}

export default UpdateContainer;
