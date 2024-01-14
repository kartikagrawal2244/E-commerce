import { createContext, useContext, useEffect, useReducer } from "react"
import Reducer from "../Reducer/Index"

const Product = createContext()

const initialstate = {
    product: []
}

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialstate)

    function getapi() {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const product = data;
                // console.log(product);
                dispatch({ type: 'API', payload: product })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getapi();
    }, [])

    return <Product.Provider value={{ ...state }}>{children}</Product.Provider>
}

const useProduct = () => {
    return useContext(Product);
}

export { ProductProvider, Product, useProduct };