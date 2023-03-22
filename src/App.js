import React from "react";
import { useSelector } from "react-redux";
import LogOut from "./components/LogOut";
import LogIn from "./components/LogIn";
import Products from "./components/Products";
import SaveList from "./components/SaveList";

const App = () => {
  const isLoggedIn = useSelector((store) => store.isLoggedIn);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list </h1>
        <Products />
        <SaveList />
      </div>
      {!isLoggedIn && <LogIn />}
      {isLoggedIn && <LogOut />}
    </div>
  );
};

export default App;
