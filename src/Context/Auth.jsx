// Authenticate.js

import { createContext, useContext, useReducer, useEffect } from "react";
import { useFormik } from "formik";
import { loginvalidation } from "../schema/Index";
import { useNavigate } from "react-router-dom";
import AuthReducer from "../Reducer/AuthReducer";

export const Auth = createContext();

const initialstate = {
    name: "",
    isLoggedIn: false,
};

export const Authenticate = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialstate);
    const Navigate = useNavigate();

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            username: '',
            password: '',
            check: false
        },
        validationSchema: loginvalidation,
        onSubmit: (values, action) => {
            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                    check: values.check,
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Login failed');
                    }
                    return response.json();
                })

                .then(data => {
                    console.log(data);
                    const { token } = data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('username', values.username);
                    alert("Login successful");
                    dispatch({ type: 'LOGIN_SUCCESS', payload: values.username });
                    action.resetForm();
                    Navigate("/")
                })

                .catch(error => {
                    console.error('Error:', error);
                })
        }
    });

    const handlelogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        alert('You have been logged out')
        dispatch({ type: 'LOGOUT' });
    };

    const initializeToken = () => {
        const token = localStorage.getItem('token');

        if (token) {
            const storedUsername = localStorage.getItem('username');
            dispatch({ type: 'LOGIN_SUCCESS', payload: storedUsername });
        }
    };

    useEffect(() => {
        initializeToken();
    }, []);

    return (
        <Auth.Provider value={{ ...state, handleSubmit, handleChange, handlelogout, values, errors, touched }}>
            {children}
        </Auth.Provider>
    );
};

export const useAuth = () => {
    return useContext(Auth);
};
