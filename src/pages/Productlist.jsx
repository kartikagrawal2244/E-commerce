import React from 'react';
import CardCarousel from '../component/Carousel';
import Delivery from '../comman/Delivery';
import { Link } from 'react-router-dom';
import { useFilter } from '../Context/FilterContext';
import Rating from '../comman/Rating';
import Subscribe from '../comman/Subscribe';
import Filter from '../component/Filter';
import HeroSection from '../comman/HeroSection';

function Productlist() {
    const { filterproducts } = useFilter();
    // console.log(filterproducts)

    return (
        <>
            {/* Header Section */}
            <HeroSection
                heading="Productlist"
            />

            {/* Filter Section */}
            <div className='max-w-6xl mx-auto py-[120px]'>
                <div className='grid xl:grid-cols-3 gap-10 px-6 xl:px-0'>
                    <div className='xl:block md:flex justify-between'>
                        <Filter />
                    </div>

                    {/* Product Display Section */}
                    <div className='xl:col-span-2'>
                        <div className='grid md:grid-cols-2 place-items-center gap-12'>
                            {filterproducts.map((item) => (
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
                            ))}
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
