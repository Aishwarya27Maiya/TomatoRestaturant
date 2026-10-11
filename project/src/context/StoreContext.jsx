import {createContext, useState, useEffect} from "react";
import {food_list} from "../assets/assets.js"

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext=createContext(null);

function StoreContextProvider(props){
    let [cartItems,setCartItems]=useState({});

    function addToCart(id){
        if(!cartItems[id])
            setCartItems((prev)=>({...prev,[id]:1}));
        else
            setCartItems((prev)=>({...prev,[id]:prev[id]+1}));
    }

    function removeFromCart(id){
        setCartItems((prev)=>({...prev,[id]:prev[id]-1}));
    }
    
    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    let contextValue={
        food_list:food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
    )
}
export default StoreContextProvider;