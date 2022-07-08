import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/Auth";
export default function HeaderCartButton(props) {
  const ctx = useContext(CartContext);
  const totalItems = ctx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  return (
    <React.Fragment>
      <button
        className={classes.button}
        onClick={() => {
          props.onOpen();
        }}
      >
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{totalItems}</span>
      </button>
    </React.Fragment>
  );
}
