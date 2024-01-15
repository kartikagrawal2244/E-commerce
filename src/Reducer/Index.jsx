

const Reducer = (state, action) => {

    switch (action.type) {
        case "API":
            return {
                ...state,
                product: action.payload
            }

        case "HOMEAPI":
            return {
                ...state,
                homeproduct: action.payload
            }
            
        default:
            return state;
    }
}

export default Reducer