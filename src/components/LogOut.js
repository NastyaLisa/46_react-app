import React from "react";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../store";

function LogOut() {

  const dispatch = useDispatch();

  const handleLogOut = () => {
    clearLocalStorage();
    dispatch({ type: LOG_OUT });
  };
  const clearLocalStorage = () => {
    localStorage.removeItem("coffee");
    localStorage.removeItem("shugar");
  };
  return (
    <button onClick={handleLogOut} className="logout">
      Log Out
    </button>
  );
}

export default LogOut;