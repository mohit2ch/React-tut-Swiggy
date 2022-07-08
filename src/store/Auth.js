import React, { useReducer } from "react";

const ACTIONS = {
    ADD_ITEM: 'add-item',
    REMOVE_ITEM: 'remove-item',
    ADD_AMOUNT: 'add-amount'
}

function reducer(state, action) {
    if(action.type === ACTIONS.ADD_ITEM){
        const updatedItems = [...state.items, action.item];
        const updatedAmount = state.totalAmount + action.item.price* action.item.amount;
        return {items: updatedItems, totalAmount: updatedAmount};
    }
    if(action.type === ACTIONS.REMOVE_ITEM){
        state.items[action.index].amount -= 1;
        const updatedAmount = state.totalAmount - state.items[action.index].price;
        if(state.items[action.index].amount === 0){
            state.items = state.items.filter((item, index)=> index!==action.index);
        }
        return {items: state.items, totalAmount: updatedAmount};
    }
    if(action.type === ACTIONS.ADD_AMOUNT){
        state.items[action.index].amount += 1;
        const updatedAmount = state.totalAmount + state.items[action.index].price;
        return {items: state.items, totalAmount: updatedAmount};
    }
  return state;
}
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (id) => {},
  removeItem: (id) => {},
});

export function CartProvider(props) {
  const [CartState, dispatch] = useReducer(reducer, {
    items: [],
    totalAmount: 0,
  });
  function addItemHandler(item, option= true) {
    if(option){
        const obj = CartState.items.find((ele)=>ele.id === item.id);
    if(obj === undefined){
        dispatch({type: ACTIONS.ADD_ITEM, item: item});
    }
    else{
        let index = 0;
       for(let i=0;i<CartState.items.length; i++){
        if(CartState.items[i].id === item.id ) index = i;
       }
        dispatch({type: ACTIONS.ADD_AMOUNT, index: index});
    }
    }
    else{
        dispatch({type: ACTIONS.ADD_AMOUNT, index: item});
    }
    
  }
  function removeItemHandler(index) {
    dispatch({type: ACTIONS.REMOVE_ITEM, index: index});
  }
  
  return (
    <CartContext.Provider
      value={{
        items: CartState.items,
        totalAmount: CartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
