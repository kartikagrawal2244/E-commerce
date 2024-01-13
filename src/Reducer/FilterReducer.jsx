// FilterReducer.js

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

        case 'FILTER_ITEM':
            const { allproduct, filter } = state;
            const { text, category, sortby } = filter;

            const newdata = allproduct.filter((item) => {
                const textMatch = item.title.toLowerCase().includes(text.toLowerCase());
                const categoryMatch = category === 'all' || item.category === category;

                return textMatch && categoryMatch;
            });

            let sortedData = [...newdata];

            if (sortby !== 'all') {
                sortedData.sort((a, b) => {
                    if (sortby === 'a-z') {
                        return a.title.localeCompare(b.title);
                    } else if (sortby === 'z-a') {
                        return b.title.localeCompare(a.title);
                    } else if (sortby === 'low-to-high') {
                        return a.price - b.price;
                    } else if (sortby === 'high-to-low') {
                        return b.price - a.price;
                    }

                    return 0;
                });
            }

            return {
                ...state,
                filterproducts: sortedData,
            };

        case 'LOAD_DATA':
            return {
                ...state,
                allproduct: action.payload,
            };

        default:
            return state;
    }
};
