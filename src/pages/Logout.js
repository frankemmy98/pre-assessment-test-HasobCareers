import React from "react";
import { useGlobalContext } from "../context";

function Logout() {
  const { handleLogout } = useGlobalContext();

  return <>{handleLogout()}</>;
}

export default Logout;
