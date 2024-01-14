import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginvalidation } from '../schema/Index';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


function Login() {

    const [eye, setEye] = useState(false);

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
                    alert("Login successful");
                    Navigate("/")
                })
                .catch(error => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    action.resetForm();
                });
        }
    });


    return (
        <>
            <div className='bg-[#B08EAD] py-[150px] text-[50px] leading-tight font-medium capitalize'>
                <h1 className='text-center text-white'>Login</h1>
            </div>

            <div className='max-w-6xl mx-auto py-32 lg:px-0 px-7 grid lg:grid-cols-2 gap-20'>
                <div>
                    <img src="/assets/images/22112339_6538623.jpg" alt="heroimage" className='w-11/12 mx-auto my-auto' />
                </div>

                <div className='w-5/6 my-auto'>
                    <h3 className='text-[26px] leading-9 mb-20 text-[#4B3049] uppercase font-bold'>Welcome Back !
                        <br /> Please Sign in now</h3>

                    <form action="" onSubmit={handleSubmit}>
                        <div className='mb-7'>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder='Username'
                                className='w-full focus:outline-none border-b border-[#dddddd] text-[#495057] text-base font-normal py-2 px-3'
                                value={values.username}
                                onChange={handleChange}
                            />

                            {errors.username && touched.username && <p className='text-red-700 text-sm '>{errors.username}</p>}
                        </div>

                        <div className='mb-7'>
                            <div className='relative'>
                                <input
                                    type={eye ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    className='w-full focus:outline-none border-b border-[#dddddd] text-[#495057] text-base font-normal py-2 px-3'
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <div className='absolute right-2 top-4 cursor-pointer' onClick={() => setEye(!eye)}>
                                    {eye ?
                                        <FaRegEye />
                                        :
                                        <FaRegEyeSlash />
                                    }
                                </div>
                            </div>

                            {errors.password && touched.password && <p className='text-red-700 text-sm '>{errors.password}</p>}
                        </div>

                        <div>
                            <label htmlFor="check" className='text-[#777777] text-sm align-middle block'>
                                <input
                                    type="checkbox"
                                    className='me-3'
                                    name="check"
                                    id="check"
                                    value={values.check}
                                    onChange={handleChange}
                                />
                                Remember me
                            </label>
                            {errors.check && touched.check && <p className='text-red-700 text-sm '>{errors.check}</p>}
                        </div>

                        <button type='submit' className='py-4 px-12 mt-6 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s] w-full uppercase mb-4'>Log in</button>
                    </form>

                    <div className='flex justify-between items-center'>
                        <Link to="/signup" className='text-[#777777] text-end capitalize'>create account</Link>

                        <Link to="/" className='text-[#777777] text-end capitalize'>Forget password?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login