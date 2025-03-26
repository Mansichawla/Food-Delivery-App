import { useState } from "react";
import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems,setCartItem] = useState({})

 const addToCart = (itemId) => {
   setCartItem((prev) => ({
     ...prev,
     [itemId]: prev[itemId] ? prev[itemId] + 1 : 1, // Increment if exists, else set to 1
   }));
 };

    
  

  const contextValue = { food_list };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}
export default StoreContextProvider;
