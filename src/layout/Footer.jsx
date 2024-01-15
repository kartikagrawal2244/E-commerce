import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';

function Footer() {
    return (
        <>
            <div className='bg-[#f4edf278]'>
                <div className="mx-auto max-w-6xl py-12 px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 lg:flex flex-wrap lg:justify-between lg:items-center place-items-start">
                        <div className="mb-4 lg:mb-0">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <img className="h-8 w-auto" src="/assets/images/logo.png.webp" alt="" />
                            </Link>
                        </div>

                        <div className="my-4 lg:my-0 lg:flex lg:gap-x-12">
                            <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 block lg:inline-block mb-2 lg:mb-0">
                                Home
                            </Link>
                            <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 block lg:inline-block mb-2 lg:mb-0">
                                About
                            </Link>
                            <Link
                                to="/productlist"
                                className="text-sm font-semibold leading-6 text-gray-900 block lg:inline-block mb-2 lg:mb-0"
                            >
                                Products
                            </Link>
                            <Link to="/blog" className="text-sm font-semibold leading-6 text-gray-900 block lg:inline-block mb-2 lg:mb-0">
                                Blog
                            </Link>
                            <Link
                                to="/contact"
                                className="text-sm font-semibold leading-6 text-gray-900 block lg:inline-block mb-2 lg:mb-0"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className='lg:my-0 flex'>
                            <Link to="https://www.facebook.com/" className='inline-block me-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0" y="0" viewBox="0 0 49.652 49.652" space="preserve" ><g><path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" fill="#4B3049" opacity="1" data-original="#000000"></path></g></svg>
                            </Link>

                            <Link to="https://www.instagram.com/" className='inline-block me-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0" y="0" viewBox="0 0 512 512" space="preserve"><g><path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0" fill="#4B3049" opacity="1" data-original="#4B3049"></path><path d="M370.594 169.305a45.546 45.546 0 0 0-10.996-16.903 45.514 45.514 0 0 0-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 0 0-16.903 10.996 45.572 45.572 0 0 0-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0 0 10.996 16.903 45.514 45.514 0 0 0 16.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0 0 27.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0" fill="#4B3049" opacity="1" data-original="#4B3049"></path><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 0 1-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 0 1-26.038-16.957 72.044 72.044 0 0 1-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0 1 16.96-26.035 72.003 72.003 0 0 1 26.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0 1 26.04 16.96 72.027 72.027 0 0 1 16.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0" fill="#4B3049" opacity="1" data-original="#4B3049"></path></g></svg>
                            </Link>

                            <Link to="https://accounts.google.co.in/" className='inline-block me-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0" y="0" viewBox="0 0 24 24" space="preserve" ><g><path d="M12 24c6.624 0 12-5.376 12-12S18.624 0 12 0 0 5.376 0 12s5.376 12 12 12zm4.283-12.857h1.718V9.426h1.718v1.718h1.703v1.718h-1.703v1.718h-1.718v-1.718h-1.718zM8.579 5.999c1.514 0 2.908.533 4.017 1.563L10.97 9.14c-.639-.625-1.514-.924-2.391-.924-2.076 0-3.736 1.718-3.736 3.779s1.655 3.779 3.736 3.779c1.577 0 3.14-.924 3.392-2.579H8.579v-2.061h5.657c.063.329.092.658.092 1.001 0 3.426-2.299 5.864-5.749 5.864V18c-3.329 0-6.001-2.686-6.001-6.001s2.672-6 6.001-6z" fill="#4B3049" opacity="1" data-original="#4B3049"></path></g></svg>
                            </Link>

                            <Link to="https://www.linkedin.com/" className='inline-block'>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0" y="0" viewBox="0 0 152 152" space="preserve"><g><g data-name="Layer 2"><path d="M76 0a76 76 0 1 0 76 76A76 76 0 0 0 76 0zM53.9 116H37.32V62.59H53.9zm-8.3-60.7a9.65 9.65 0 1 1 9.61-9.7 9.68 9.68 0 0 1-9.61 9.7zM116 116H99.43V90c0-6.2-.12-14.15-8.62-14.15s-10 6.74-10 13.7V116H64.3V62.59h15.91v7.28h.23c2.21-4.2 7.62-8.63 15.69-8.63 16.78 0 19.87 11.06 19.87 25.42z" data-name="10.Linkedin" fill="#4B3049" opacity="1" data-original="#000000"></path></g></g></svg>
                            </Link>
                        </div>
                    </div>
                </div >

                <div className="bg-[#F4EDF2] py-6">
                    <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 lg:place-items-end place-items-center">
                        <div className="mb-4 lg:mb-0 text-center">
                            <p className="text-[#795376] text-base font-normal">
                                Copyright © 2023 All rights reserved | This template is made with{' '}
                                <IoMdHeartEmpty fontSize={25} className="inline" /> by{' '}
                                <span className="text-[#4B3049]">Colorlib</span>{' '}
                            </p>
                        </div>

                        <div className="text-[#4B3049] text-sm lg:text-lg text-center lg:text-right">
                            <Link to="/" className="mr-5">
                                Terms & Conditions
                            </Link>

                            <Link to="/">FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
