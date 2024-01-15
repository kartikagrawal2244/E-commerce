import React from 'react'
import HeroSection from '../comman/HeroSection'
import { useCart } from '../Context/CartContext'

function ProductCheckout() {

    const { cart, totalamount, shipping } = useCart();

    return (
        <>
            <HeroSection
                heading="Product Checkout"
            />

            <div className='max-w-6xl mx-auto py-16 px-6'>
                <h4 className='text-[27px] font-semibold text-[#4B3049] leading-normal mb-4'>Billing Details</h4>
                <div className='grid lg:grid-cols-3 gap-20'>
                    <div className='col-span-2'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-8 mb-6'>
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Enter your First Name"
                                        required
                                    />

                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Enter your Last Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className='grid md:grid-cols-2 gap-8 mb-6'>
                                <div>
                                    <input
                                        type="number"
                                        name="name"
                                        id="name"
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Phone number"
                                        required
                                    />

                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Enter email address"
                                        required
                                    />
                                </div>
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="text"
                                    name="address1"
                                    id="address1"
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="Address line 01"
                                />
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="text"
                                    name="address2"
                                    id="address2"
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="Address line 02"
                                />
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="text"
                                    name="town/city"
                                    id="town/city"
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="Town/City"
                                />
                            </div>

                            <div className='mb-6'>
                                <select name="" id="" className='border border-[#f0e9ff] rounded-md py-3 px-[18px] text-[13px] font-normal focus:outline-none'>
                                    <option>Country</option>
                                    <option value="india">India</option>
                                    <option value="USA">USA</option>
                                    <option value="america">America</option>
                                    <option value="hongkong">Hong Kong</option>
                                </select>
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="number"
                                    name="postCode/ZIP"
                                    id="postCode/ZIP"
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="PostCode/ZIP"
                                />
                            </div>

                            <div className='mb-6'>
                                <select name="" id="" className='border border-[#f0e9ff] rounded-md py-3 px-[18px] text-[13px] font-normal focus:outline-none'>
                                    <option>State</option>
                                    <option value="rajasthan">Rajasthan</option>
                                    <option value="madhayPradesh">Madhay Pradesh</option>
                                    <option value="uttarPradesh">Uttar Pradesh</option>
                                    <option value="delhi">Delhi</option>
                                </select>
                            </div>

                            <div className='mb-6'>
                                <select name="" id="" className='border border-[#f0e9ff] rounded-md py-3 px-[18px] text-[13px] font-normal focus:outline-none'>
                                    <option>District</option>
                                    <option value="jaipur">Jaipur</option>
                                    <option value="USA">Udaipur</option>
                                    <option value="jodhpur">Jodhpur</option>
                                    <option value="mountabu">Mount Abu</option>
                                </select>
                            </div>

                            <div className='mb-6'>
                                <textarea
                                    name="orderNotes"
                                    id="orderNotes"
                                    cols="30"
                                    rows="7"
                                    placeholder='Order Notes'
                                    className='border border-[#f0e9ff] rounded-md ps-[18px] text-[13px] w-full focus:outline-none pt-3'
                                    required
                                >
                                </textarea>
                            </div>

                            <button type='submit' className='py-4 px-12 mt-6 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium capitalize transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>Submit</button>
                        </form>
                    </div>

                    <div className='bg-[#f4f4f4] p-6'>
                        <h5 className='text-lg font-medium pb-4 text-[#2a2a2a] border-b border-[#dddddd]'>Your Order</h5>

                        <div className='flex justify-between py-4 border-b border-[#dddddd]'>
                            <div>
                                <p className='text-sm text-[#795376]'>Product</p>
                            </div>

                            <div>
                                <p className='text-sm text-[#795376]'>Total</p>
                            </div>
                        </div>

                        {cart.map((item, index) => {
                            return (
                                <div key={index} className='flex justify-between py-4 border-b border-[#dddddd]'>
                                    <div className='w-36'>
                                        <p className='text-sm text-[#795376]'>{item.name}</p>
                                    </div>

                                    <div className='w-12'>
                                        <p>x {item.digit}</p>
                                    </div>

                                    <div>
                                        <p className='text-sm text-[#795376]'>${item.price * item.digit}</p>
                                    </div>
                                </div>
                            )
                        })

                        }

                        <div className='flex justify-between py-4 border-[#dddddd] border-b'>
                            <p className='text-sm text-[#2a2a2a] font-bold me-40'>Subtotal</p>
                            <p className='text-sm text-[#2a2a2a] font-bold'>&#36;&nbsp;{totalamount}
                            </p>
                        </div>

                        <div className='flex justify-between py-4 border-[#dddddd] border-b'>
                            <p className='text-sm text-[#2a2a2a] font-bold me-40'>Shipping</p>

                            <p className='text-sm text-[#2a2a2a] font-bold'>&#36;&nbsp;{shipping}
                            </p>
                        </div>

                        <div className='flex justify-between py-4 border-[#dddddd] border-b'>
                            <p className='text-sm text-[#2a2a2a] font-bold me-40'>Total</p>

                            <p className='text-sm text-[#2a2a2a] font-bold'>&#36;&nbsp;{totalamount + shipping}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCheckout