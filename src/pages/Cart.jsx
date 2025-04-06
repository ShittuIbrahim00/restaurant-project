import React from "react";
import CartHeroBg from "../cartcomponents/CartHeroBg";
import CartBody from "../cartcomponents/CartBody";
import EmptyCart from "../cartcomponents/EmptyCart";

const Cart = () => {
  const checkCart = "1";
  return (
    <div>
      {checkCart ? (
        <div>
          <CartHeroBg />
          <CartBody />
        </div>
      ) : (
        <div>
          <CartHeroBg />
          <EmptyCart />
        </div>
      )}
    </div>
  );
};

export default Cart;
