
const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                name: action.payload,
                isLoggedIn: true,
            };

        case 'LOGOUT':
            return {
                ...state,
                name: "",
                isLoggedIn: false,
            };

        default:
            return state;
    }
};

export default AuthReducer;
