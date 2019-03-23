import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("username");
  }, []);
  return <Redirect to="/login" />;
}

export default Logout;
