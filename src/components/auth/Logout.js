import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("username");
    localStorage.removeItem("event");
    localStorage.removeItem("avatar");
    localStorage.removeItem("games");
  }, []);

  return <Redirect to="/login" />;
}

export default Logout;
