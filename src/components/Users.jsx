import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/user/slice";
import { userSelector } from "../store/user/selectors";

export default function Users() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector);

  const updateUser = () => {
    dispatch(setUser({ firstName, lastName }));
  };

  return (
    <div>
      <h3>First name:</h3>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <h3>Last name:</h3>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={updateUser}>Add user</button>
      <p>
        Hi, {currentUser.firstName} {currentUser.lastName}
      </p>
    </div>
  );
}
