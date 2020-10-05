import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// import Flash from "../components/Flash";
import UpdateForm from "../pages/UpdateForm";

function UpdateContainer({ api }) {
  const [user, setUser] = useState(null);
  const { username, updateCode } = useParams("/:username/:updateCode");

  useEffect(() => {
    fetch(`${api}/${username}/${updateCode}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(setUser({ Error: "Something went wrong" }));
  }, [api, username, updateCode]);

  return (
    <div className='main-padding'>
      <Link to='/' style={{ textDecoration: "none", color: "inherit" }}></Link>

      {
        user?.Error && null
        // <Flash className='animated shake delay-1s'>{user.Error}</Flash>
      }

      {user && <UpdateForm user={user} url={api} />}
    </div>
  );
}

export default UpdateContainer;
