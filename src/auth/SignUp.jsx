import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { signupvalidation } from '../schema/Index';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function SignUp() {

    const [eye, setEye] = useState(false);

    const Navigate = useNavigate();

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema: signupvalidation,
        onSubmit: (values, action) => {
            console.log(values);
            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                    confirmpassword: values.confirmpassword,
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
                    localStorage.setItem('userId', JSON.stringify(data.userId))
                    localStorage.setItem('password', JSON.stringify(data.password))
                    Navigate("/login")
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
                <h1 className='text-center text-white'>Sign Up</h1>
            </div>

            <div className='max-w-6xl mx-auto py-32 lg:px-0 px-7 grid lg:grid-cols-2 gap-20'>
                <div>
                    <img src="/assets/images/22112339_6538623.jpg" alt="heroimage" className='w-11/12 mx-auto my-auto' />
                </div>

                <div className='w-5/6 my-auto'>
                    <h3 className='text-[26px] leading-9 mb-20 text-[#4B3049] uppercase font-bold'>Welcome Back !
                        <br /> Please Sign up now</h3>

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
                                <div className='absolute right-2 top-4' onClick={() => setEye(!eye)}>
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
                            <input
                                type="text"
                                name="confirmpassword"
                                id="confirmpassword"
                                placeholder='Confirm Password'
                                className='w-full focus:outline-none border-b border-[#dddddd] text-[#495057] text-base font-normal py-2 px-3'
                                value={values.confirmpassword}
                                onChange={handleChange}
                            />
                            {errors.confirmpassword && touched.confirmpassword && <p className='text-red-700 text-sm '>{errors.confirmpassword}</p>}
                        </div>

                        <button type='submit' className='py-4 px-12 mt-6 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s] w-full uppercase mb-4'>Sign Up</button>
                    </form>

                    <Link to="/login" className='text-[#777777] text-end capitalize'>already have an account</Link>
                </div>
            </div>
        </>
    )
}

export default SignUp