import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Prodoucts = () => {
  const { users } = useFirebase();
  return (
    <div>
      <h2>Knoock knoock who is there ?</h2>
      <h5>Current User Id : {users ? users.displayName : "no body"}</h5>
    </div>
  );
};

export default Prodoucts;
