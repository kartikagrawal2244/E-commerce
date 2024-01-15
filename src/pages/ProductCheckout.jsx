import React from 'react'
import HeroSection from '../comman/HeroSection'

function ProductCheckout() {
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

                    {/* <div>
                        <div className='flex mb-6'>
                            <div className='me-4'>
                                <IoHomeOutline color='#8f9195' className='text-4xl' />
                            </div>

                            <div>
                                <h5 className='text-[#2a2a2a] text-base font-medium'>Jaipur , Rajasthan.</h5>
                                <p className='text-[#8a8a8a] text-[15px] font-normal leading-loose'>India , 302020</p>
                            </div>
                        </div>

                        <div className='flex mb-6'>
                            <div className='me-4'>
                                <FaMobileScreen color='#8f9195' className='text-4xl' />
                            </div>

                            <div>
                                <h5 className='text-[#2a2a2a] text-base font-medium'>6745365241</h5>
                                <p className='text-[#8a8a8a] text-[15px] font-normal leading-loose'>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='me-4'>
                                <CiMail color='#8f9195' className='text-4xl' />
                            </div>

                            <div>
                                <h5 className='text-[#2a2a2a] text-base font-medium'>support@example.com</h5>
                                <p className='text-[#8a8a8a] text-[15px] font-normal leading-loose'>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ProductCheckout