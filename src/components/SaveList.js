import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RESET } from "../store";

const SaveList = () => {
  const isLoggedIn = useSelector((store) => store.isLoggedIn);
  const coffee = useSelector((store) => store.coffee);
  const shugar = useSelector((store) => store.shugar);
  const dispatch = useDispatch();

  const save = () => {
    localStorage.setItem("coffee", coffee);
    localStorage.setItem("shugar", shugar);
  };

  const clear = () => {
    localStorage.removeItem("coffee");
    localStorage.removeItem("shugar");
    dispatch({ type: RESET });
  };

  return (
    <div className="save">
      {!isLoggedIn && <p>You must be logged in to save the list.</p>}
      {isLoggedIn && <button onClick={save}>SAVE</button>}
      {isLoggedIn && <button onClick={clear}>CLEAR</button>}
    </div>
  );
};

export default SaveList;
