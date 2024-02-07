import React, { useEffect, useState } from 'react';
import CardCarousel from '../component/Carousel';
import Delivery from '../comman/Delivery';
import { Link } from 'react-router-dom';
import { useFilter } from '../Context/FilterContext';
import Rating from '../comman/Rating';
import Subscribe from '../comman/Subscribe';
import Filter from '../component/Filter';
import HeroSection from '../comman/HeroSection';
import { useProduct } from '../Context';

function Productlist() {
    const { filterproducts } = useFilter();
    const { product, isloading } = useProduct();

    const [filteredProduct, setFilteredProduct] = useState([]);

    if (filterproducts !== undefined ) {
        setFilteredProduct(filterproducts);
    }else{
        setFilteredProduct(product);
    }

    console.log(filteredProduct);
    return (
        <>
            {/* Header Section */}
            <HeroSection
                heading="Productlist"
            />

            {/* Filter Section */}
            <div className='max-w-6xl mx-auto py-[120px]'>
                <div className='grid xl:grid-cols-3 gap-10 px-6 xl:px-0'>
                    <div>
                        <Filter />
                    </div>

                    {/* Product Display Section */}
                    <div className='xl:col-span-2'>
                        <div className='grid md:grid-cols-2 place-items-center gap-12'>
                            {isloading ?
                                <div className="flex items-center">
                                    <svg
                                        className="animate-spin h-10 w-10 text-[#B08EAD] me-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4c-4.418 0-8-3.582-8-8z"
                                        ></path>
                                    </svg>
                                    <p className='text-base text-slate-500'>Loading</p>
                                </div>
                                :
                                <>
                                    {
                                        filteredProduct.map((item) => (
                                            <div key={item.id}>
                                                <img src={item.image} alt="product_image" className='max-w-48 mx-auto' />

                                                <Link to={`/productdetail/${item.id}`}
                                                    className='text-2xl mt-[22px] font-medium text-[#4B3049] hover:text-[#795376] inline-block mb-2 uppercase transition ease-in-out duration-[0.5s]'>
                                                    {item.title}
                                                </Link>

                                                <div className='flex justify-between'>
                                                    <p className='text-xl font-medium text-[#795376] capitalize'> &#36; {item.price}</p>

                                                    <Rating
                                                        Rate={item.rating.rate}
                                                        Count={item.rating.count}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div >
            </div >

            {/* carousel Sections */}
            < CardCarousel />

            {/* policy section */}
            < Delivery />

            {/* Subscription Section */}
            < Subscribe />
        </>
    );
}

export default Productlist;
