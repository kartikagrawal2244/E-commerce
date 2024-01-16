

const Reducer = (state, action) => {

    switch (action.type) {
        case "API":
            return {
                ...state,
                isloading:false,
                product: action.payload,
            }

        case "HOMEAPI":
            return {
                ...state,
                isloading:false,
                homeproduct: action.payload
            }
            
        default:
            return state;
    }
}

export default Reducer