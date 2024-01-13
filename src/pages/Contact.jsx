import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

    const [state, handleSubmit] = useForm("xrgnbqwz");
    
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }


    return (
        <>
            <div className='bg-[#B08EAD] py-[150px] text-[50px] leading-tight font-medium capitalize'>
                <h1 className='text-center text-white'>Contact us</h1>
            </div>

            <div className='max-w-6xl mx-auto py-16 px-6'>
                <h4 className='text-[27px] font-semibold text-[#4B3049] leading-normal mb-4'>Get in Touch</h4>
                <div className='grid lg:grid-cols-3 gap-20'>
                    <div className='col-span-2'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-6'>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="9"
                                    // value={values.message}
                                    // onChange={handleChange}
                                    placeholder='Enter Message'
                                    className='border border-[#f0e9ff] rounded-md ps-[18px] text-[13px] w-full focus:outline-none pt-3'
                                    required
                                >
                                </textarea>
                                {/* {errors.message && touched.message && <p className='text-red-700 text-sm font-medium'>{errors.message}</p>} */}

                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />

                            </div>

                            <div className='grid md:grid-cols-2 gap-8 mb-6'>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        // value={values.name}
                                        // onChange={handleChange}
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Enter your name"
                                        required
                                    />
                                    {/* {errors.name && touched.name && <p className='text-red-700 text-sm font-medium'>{errors.name}</p>} */}

                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                    />

                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        // value={values.email}
                                        className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                        placeholder="Enter email address"
                                        // onChange={handleChange}
                                        required
                                    />
                                    {/* {errors.email && touched.email && <p className='text-red-700 text-sm font-medium'>{errors.email}</p>} */}
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>

                            <div className='mb-6'>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    // value={values.subject}
                                    className='border border-[#f0e9ff] rounded-md py-3 ps-[18px] text-[13px] w-full font-normal focus:outline-none'
                                    placeholder="Enter Subject"
                                // onChange={handleChange}
                                />
                                {/* {errors.subject && touched.subject && <p className='text-red-700 text-sm font-medium'>{errors.subject}</p>} */}

                                <ValidationError
                                    prefix="Subject"
                                    field="subject"
                                    errors={state.errors}
                                />
                            </div>

                            <button type='submit' className='py-4 px-12 mt-6 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium capitalize transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>Send Message</button>
                        </form>
                    </div>

                    <div>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
