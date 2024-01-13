

const Reducer = (state, action) => {

    switch (action.type) {
        case "API":
            return {
              ...state,
                product: action.payload
            }
    
        default:
            return state;
    }  
}

export default Reducer