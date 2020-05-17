import React, { useContext, useEffect } from "react";
import Context from "../context";
import request from "../mock";

export default function User() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    request("/user").then(user => dispatch({ type: "setUser", user }));
  }, []);
  return (
    <div>
      <h1>个人信息</h1>
      <div>name: {state.user ? state.user.name : ""}</div>
    </div>
  );
}
