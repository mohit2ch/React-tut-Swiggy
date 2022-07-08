import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/Auth";
import CartItem from "./CartItem";

export default function Cart(props) {
  const ctx = useContext(CartContext);
  return (
    <Modal>
      <div>
        <ul className={classes["cart-items"]}>
          {ctx.items.map((item, index) => {
            return (
              <CartItem
                name={item.name}
                price={item.price}
                amount={item.amount}
                key={index + 1}
                onRemove={() => {
                  ctx.removeItem(index);
                }}
                onAdd={() => {
                  ctx.addItem(index, false);
                }}
              />
            );
          })}
        </ul>
        <div className={classes.actions}>
          <span>Grand Total : ${ctx.totalAmount.toFixed(2)}</span>
          <button
            className={classes["button--alt"]}
            onClick={() => {
              props.onClose();
            }}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
}
