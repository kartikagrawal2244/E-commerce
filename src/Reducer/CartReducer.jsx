
const Reducer = (state, action) => {
    switch (action.type) {

        // add to cart functionality 

        case "ADD-TO-CART":

            let { currentProduct, digit } = action.payload;

            let currentcart = state.cart.find(curritem => curritem.id === currentProduct.id);


            if (currentcart) {
                let newcart = state.cart.map(update => {
                    // console.log(update);
                    if (update.id === currentProduct.id) {
                        return {
                            ...update,
                            digit: update.digit + digit
                        }
                    } else {
                        return update
                    }
                })
                return {
                    ...state,
                    cart: newcart,
                }
            } else {
                let productcart = {
                    id: currentProduct.id,
                    name: currentProduct.title,
                    digit,
                    image: currentProduct.image,
                    price: currentProduct.price,
                }

                return {
                    ...state,
                    cart: [...state.cart, productcart],
                }
            }

        // clear all data functinaliy 

        case "CLEAR-DATA":

            return {
                ...state,
                cart: [],
            }

        // increment and decrement functionality

        case "INCREASE":
            const updatedIncreaseCart = state.cart.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        digit: item.digit + 1
                    };
                }
                return item;
            });

            return {
                ...state,
                cart: updatedIncreaseCart,
            };

        case "DECREASE":
            const updatedDecreaseCart = state.cart.map(item => {
                if (item.id === action.payload && item.digit > 1) {
                    return {
                        ...item,
                        digit: item.digit - 1
                    };
                }
                return item;
            });

            return {
                ...state,
                cart: updatedDecreaseCart,
            };

        // sub total price calculation

        case "SUB_TOTAL_PRICE":

            let total = state.cart.reduce((acc, item) => {
                return acc + item.price * item.digit;
            }, 0);

            return {
                ...state,
                totalamount: Math.round(total),
            };

        // total item calculation

        case "TOTAL_ITEM":

            let totalitem = state.cart.reduce((acc, item) => {
                return acc + item.digit;
            }, 0);

            return {
                ...state,
                totalquantity: totalitem,
            };

        case "HANDLEDELETE":

            let newcart = state.cart.filter(item => item.id !== action.payload);

            return {
                ...state,
                cart: newcart,
            };

        default:
            return state;
    }
}

export default Reducer;