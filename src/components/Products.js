import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  INCREMENT_COFFE,
  DECREMENT_COFFE,
  INCREMENT_SHUGAR,
  DECREMENT_SHUGAR,
  INCREASE_COFFEE,
  INCREASE_SHUGAR,
} from "../store";

const Products = () => {
  const coffee = useSelector((store) => store.coffee);
  const shugar = useSelector((store) => store.shugar);
  const isLoggedIn = useSelector((store) => store.isLoggedIn);

  const dispatchFunc = useDispatch();

  const incrementCoffe = () => {
    dispatchFunc({ type: INCREMENT_COFFE });
  };

  const decrementCoffe = () => {
    dispatchFunc({ type: DECREMENT_COFFE });
  };
  const incrementShugar = () => {
    dispatchFunc({ type: INCREMENT_SHUGAR });
  };

  const decrementShugar = () => {
    dispatchFunc({ type: DECREMENT_SHUGAR });
  };

  const increaseCoffee = () => {
    dispatchFunc({ type: INCREASE_COFFEE, payload: { number: 10 } });
  };

  const increaseShugar = () => {
    dispatchFunc({ type: INCREASE_SHUGAR, payload: { number: 10 } });
  };

  return (
    <>
      <div className="product">
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={incrementCoffe}>+</button>
        <button onClick={decrementCoffe}>-</button>
        {isLoggedIn && <button onClick={increaseCoffee}>+10</button>}
      </div>
      <div className="product">
        <span>{`Sugar: ${shugar}`}</span>
        <button onClick={incrementShugar}>+</button>
        <button onClick={decrementShugar}>-</button>
        {isLoggedIn && <button onClick={increaseShugar}>+10</button>}
      </div>
    </>
  );
};

export default Products;
