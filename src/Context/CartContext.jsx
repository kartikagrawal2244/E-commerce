import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "../Reducer/CartReducer";

export const CartContext = createContext();

const getData = () => {
    let localStoragedata = localStorage.getItem('cart');

    if (localStoragedata) {
        return JSON.parse(localStoragedata);
    } else {
        return [];
    }
}

export const CartProvider = ({ children }) => {
    const initialvalue = {
        cart: getData(),
        totalquantity: "",
        totalamount: "",
        subtotal: "",
        shipping: 500
    }

    const [state, dispatch] = useReducer(Reducer, initialvalue);

    const addtocart = (currentProduct, digit) => {
        dispatch({ type: 'ADD-TO-CART', payload: { currentProduct, digit } })
    }

    const cleardata = () => {
        dispatch({ type: 'CLEAR-DATA' })
    }

    const increase = (id) => {
        dispatch({ type: "INCREASE", payload: id })
    }

    const decrease = (id) => {
        dispatch({ type: "DECREASE", payload: id })
    }

    const handledelete = (id) => {
        dispatch({ type: "HANDLEDELETE", payload: id })
    }

    useEffect(() => {
        dispatch({ type: "TOTAL_ITEM" })
        dispatch({ type: "SUB_TOTAL_PRICE" })
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addtocart, cleardata, increase, decrease , handledelete }}>
            {children}
        </CartContext.Provider>
    )
}



export const useCart = () => {
    return useContext(CartContext)
}