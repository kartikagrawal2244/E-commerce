export const FilterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    text: action.payload,
                },
            };

        case 'SET_CATEGORY':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    category: action.payload,
                },
            };

        case 'SET_SORT':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    sortby: action.payload,
                },
            };

        case 'FILTER_AND_LOAD_DATA':

            const { allproduct } = state;
            const { text, category, sortby } = state.filter;

            const filteredData = allproduct.filter((item) => {
                const textMatch = item.title.toLowerCase().includes(text.toLowerCase());
                const categoryMatch = category === 'all' || item.category === category;
                return textMatch && categoryMatch;
            });

            const sortedData = sortData(filteredData, sortby);

            return {
                ...state,
                filterproducts: sortedData,
                allproduct: [...action.payload],
            };

        default:
            return state;
    }
};

const sortData = (data, sortby) => {
    if (sortby === 'a-z') return data.sort((a, b) => a.title.localeCompare(b.title));
    if (sortby === 'z-a') return data.sort((a, b) => b.title.localeCompare(a.title));
    if (sortby === 'low-to-high') return data.sort((a, b) => a.price - b.price);
    if (sortby === 'high-to-low') return data.sort((a, b) => b.price - a.price);
    return data;
};