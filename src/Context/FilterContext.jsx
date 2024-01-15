import { createContext, useContext, useEffect, useReducer } from "react";
import { useProduct } from ".";
import { FilterReducer } from "../Reducer/FilterReducer";


export const FilterContext = createContext();

const initialstate = {
    filterproducts: [],
    allproduct: [],
    filter: {
        text: '',
        category: 'all',
        sortby: 'all',
    }
}

export const FilterProvider = ({ children }) => {

    const { product } = useProduct();

    const [state, dispatch] = useReducer(FilterReducer, initialstate);

    const handleSearchChange = (searchText) => {
        console.log(searchText);
        dispatch({ type: 'SET_TEXT', payload: searchText });
    };

    const handleCategoryChange = (selectedCategory) => {
        console.log(selectedCategory);
        dispatch({ type: 'SET_CATEGORY', payload: selectedCategory });
    };

    const handleSortby = (selectedSortby) => {
        dispatch({ type: 'SET_SORT', payload: selectedSortby });
    };

    useEffect(() => {
        dispatch({ type: "FILTER_AND_LOAD_DATA", payload: product })
    }, [product, state.filter])


    return <FilterContext.Provider value={{ ...state, handleSearchChange, handleCategoryChange, handleSortby }}>
        {children}
    </FilterContext.Provider>
}

export const useFilter = () => {
    return useContext(FilterContext);
}