import Header from "./components/Layout/Header";
import React, {useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {CartProvider} from './store/Auth';
function App() {
  const [cartShow, setCartShow] = useState(false);
  return (
    <CartProvider>
      <Header onOpen={()=>{setCartShow(true)}}/>
      <Meals/>
      {cartShow && <Cart onClose={()=>{setCartShow(false)}}/>}
    </CartProvider>
  );
}

export default App;
