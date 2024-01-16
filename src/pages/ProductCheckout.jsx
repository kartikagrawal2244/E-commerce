import React from 'react'
import HeroSection from '../comman/HeroSection'
import { useCart } from '../Context/CartContext'
import { useFormik } from 'formik';
import { checkoutvalidationschema } from '../schema/Index';


const initialstate = {
    firstname: '',
    lastname: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    postcode: '',
    phone: '',
    district: '',
    ordernotes: '',
}

function ProductCheckout() {

    const { cart, totalamount, shipping } = useCart();

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: initialstate,
        validationSchema: checkoutvalidationschema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    })

    return (
        <>
            <HeroSection
                heading="Product Checkout"
            />

            <div className='max-w-6xl mx-auto py-16 px-6'>
                <h4 className='text-[27px] font-semibold text-[#4B3049] leading-normal mb-4'>Billing Details</h4>
                <div className='grid lg:grid-cols-3 gap-20'>
                    <div className='col-span-2 lg:order-1 order-2'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid md:grid-cols-2 gap-8 mb-6'>
                                <div>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Enter your First Name"
                                        onChange={handleChange}
                                        value={values.firstname}
                                    />
                                    {
                                        errors.firstname && touched.firstname && <p className='text-red-700 text-base'>{errors.firstname}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Enter your Last Name"
                                        onChange={handleChange}
                                        value={values.lastname}
                                    />
                                    {
                                        errors.lastname && touched.lastname && <p className='text-red-700 text-base'>{errors.lastname}</p>
                                    }
                                </div>
                            </div>

                            <div className='grid md:grid-cols-2 gap-8 mb-6'>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Phone number"
                                        onChange={handleChange}
                                        value={values.phone}
                                    />
                                    {
                                        errors.phone && touched.phone && <p className='text-red-700 text-base'>{errors.phone}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Enter email address"
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                    {
                                        errors.email && touched.email && <p className='text-red-700 text-base'>{errors.email}</p>
                                    }
                                </div>
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="text"
                                    name="address1"
                                    id="address1"
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="Address line 01"
                                    onChange={handleChange}
                                    value={values.address1}
                                />
                                {
                                    errors.address1 && touched.address1 && <p className='text-red-700 text-base'>{errors.address1}</p>
                                }
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="text"
                                    name="address2"
                                    id="address2"
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="Address line 02"
                                    onChange={handleChange}
                                    value={values.address2}
                                />
                                {
                                    errors.address2 && touched.address2 && <p className='text-red-700 text-base'>{errors.address2}</p>
                                }
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="Town/City"
                                    onChange={handleChange}
                                    value={values.city}
                                />
                                {
                                    errors.city && touched.city && <p className='text-red-700 text-base'>{errors.city}</p>
                                }
                            </div>

                            <div className='mb-6'>
                                <select name="country" id="country" className='border border-[#f0e9ff] rounded-md py-3 px-[18px] text-[13px] font-normal focus:outline-none'
                                    onChange={handleChange}
                                    value={values.country}
                                >
                                    <option>Country</option>
                                    <option value="india">India</option>
                                    <option value="USA">USA</option>
                                    <option value="america">America</option>
                                    <option value="hongkong">Hong Kong</option>
                                </select>
                                {
                                    errors.country && touched.country && <p className='text-red-700 text-base'>{errors.country}</p>
                                }
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="tel"
                                    name="postcode"
                                    id="postcode"
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="PostCode/ZIP"
                                    onChange={handleChange}
                                    value={values.postcode}
                                />
                                {
                                    errors.postcode && touched.postcode && <p className='text-red-700 text-base'>{errors.postcode}</p>
                                }
                            </div>

                            <div className='mb-6'>
                                <select name="state" id="state" className='border border-[#f0e9ff] rounded-md py-3 px-[18px] text-[13px] font-normal focus:outline-none'
                                    onChange={handleChange}
                                    value={values.state}
                                >
                                    <option>State</option>
                                    <option value="rajasthan">Rajasthan</option>
                                    <option value="madhayPradesh">Madhay Pradesh</option>
                                    <option value="uttarPradesh">Uttar Pradesh</option>
                                    <option value="delhi">Delhi</option>
                                </select>
                                {
                                    errors.state && touched.state && <p className='text-red-700 text-base'>{errors.state}</p>
                                }
                            </div>

                            <div className='mb-6'>
                                <select name="district" id="district" className='border border-[#f0e9ff] rounded-md py-3 px-[18px] text-[13px] font-normal focus:outline-none'
                                    onChange={handleChange}
                                    value={values.district}
                                >
                                    <option>District</option>
                                    <option value="jaipur">Jaipur</option>
                                    <option value="USA">Udaipur</option>
                                    <option value="jodhpur">Jodhpur</option>
                                    <option value="mountabu">Mount Abu</option>
                                </select>
                                {
                                    errors.district && touched.district && <p className='text-red-700 text-base'>{errors.district}</p>
                                }
                            </div>

                            <div className='mb-6'>
                                <textarea
                                    name="ordernotes"
                                    id="ordernotes"
                                    cols="30"
                                    rows="7"
                                    placeholder='Order Notes'
                                    className='border border-[#f0e9ff] rounded-md ps-[18px] text-[13px] w-full focus:outline-none pt-3'
                                    onChange={handleChange}
                                    value={values.ordernotes}
                                >
                                </textarea>
                                {
                                    errors.ordernotes && touched.ordernotes && <p className='text-red-700 text-base'>{errors.ordernotes}</p>
                                }
                            </div>

                            <button type='submit' className='py-4 px-12 mt-6 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium capitalize transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>Place Order</button>
                        </form>
                    </div>

                    <div className='bg-[#f4f4f4] p-6 lg:order-2 order-1'>
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

                        <div>
                            <div className='py-4'>
                                <label>
                                    <input type="radio" name="delivery" value="cashondelivery" />
                                    <span className='ms-3 text-sm text-[#2a2a2a] font-bold'>Cash On Delivery</span>
                                </label>
                            </div>

                            <div className='pb-4'>
                                <label>
                                    <input type="radio" name="delivery" value="upi" />
                                    <span className='ms-3 text-sm text-[#2a2a2a] font-bold'>UPI Payment</span>
                                </label>
                            </div>

                            <div>
                                <label>
                                    <input type="radio" name="delivery" value="card" />
                                    <span className='ms-3 text-sm text-[#2a2a2a] font-bold'>Card Payment</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCheckout