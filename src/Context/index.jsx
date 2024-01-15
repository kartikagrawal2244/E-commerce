import { createContext, useContext, useEffect, useReducer } from "react"
import Reducer from "../Reducer/Index"

const Product = createContext()

const initialstate = {
    product: [],
    homeproduct: [],
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

    function homeapi() {
        fetch(`https://fakestoreapi.com/products?limit=6`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                const homeproduct = data;
                dispatch({ type: 'HOMEAPI', payload: homeproduct })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getapi();
        homeapi();
    }, [])

    return <Product.Provider value={{ ...state }}>{children}</Product.Provider>
}

const useProduct = () => {
    return useContext(Product);
}

export { ProductProvider, Product, useProduct };