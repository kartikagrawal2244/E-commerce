import React from 'react';
import CardCarousel from '../component/Carousel';
import Delivery from '../comman/Delivery';
import { Link } from 'react-router-dom';
import { useProduct } from '../Context';
import { useFilter } from '../Context/FilterContext';
import Rating from '../comman/Rating';

function Productlist() {
    const { product } = useProduct();
    const { handleSearchChange, filter, filterproducts, handleCategoryChange, handleSortby } = useFilter();
    const { text, category, sortby } = filter;

    const uniqueCategories = Array.from(new Set(product.map((item) => item.category)));

    return (
        <>
            {/* Header Section */}
            <div className='bg-[#B08EAD] py-[150px] text-[50px] leading-tight font-medium capitalize'>
                <h1 className='text-center text-white uppercase'>product list</h1>
            </div>

            {/* Filter Section */}
            <div className='max-w-6xl mx-auto py-[120px]'>
                <div className='grid xl:grid-cols-3 gap-10 px-6 xl:px-0'>
                    <div className='xl:block md:flex justify-between'>
                        {/* Search Input */}
                        <div className='mb-6'>
                            <input
                                type="search"
                                placeholder='Search'
                                name=""
                                id=""
                                className='w-full bg-[#F4EDF2] rounded-full border border-[#F4EDF2] py-[13px] px-[25px] leading-[25px] focus:outline-none focus:border-0'
                                value={text}
                                onChange={(e) => {
                                    handleSearchChange(e.target.value);
                                }}
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className='mb-6'>
                            <select
                                name=""
                                id=""
                                value={category}
                                onChange={(e) => handleCategoryChange(e.target.value)}
                                className='w-full bg-[#F4EDF2] rounded-full border border-[#F4EDF2] py-[13px] px-[25px] leading-[25px] focus:outline-none focus:border-0'
                            >
                                <option value="all">All Categories</option>
                                {uniqueCategories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort By Dropdown */}
                        <div className='mb-6'>
                            <select
                                name=""
                                id=""
                                value={sortby}
                                onChange={(e) => handleSortby(e.target.value)}
                                className='w-full bg-[#F4EDF2] rounded-full border border-[#F4EDF2] py-[13px] px-[25px] leading-[25px] focus:outline-none focus:border-0'
                            >
                                <option value="all">Sort by</option>
                                <option value="a-z">A to Z</option>
                                <option value="z-a">Z to A</option>
                                <option value="high-to-low">Price High To Low</option>
                                <option value="low-to-high">Price Low To High</option>
                            </select>
                        </div>
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
                                        <p className='text-xl font-medium text-[#795376] capitalize'> &#8377; {item.price}</p>

                                        <Rating
                                            Rate={item.rating.rate}
                                            Count={item.rating.count}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Sections */}
            <div className='bg-[#B08EAD] py-[100px]'>
                <div className='max-w-6xl mx-auto'>
                    <CardCarousel />
                </div>
            </div>

            <Delivery />

            <div className='bg-[#4B3049] text-center py-[200px]'>
                {/* Subscription Section */}
                <h2 className='text-white text-[40px] leading-normal font-semibold mb-2'>Get promotions & updates!</h2>

                <p className='text-white text-base font-normal max-w-3xl mx-auto'>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>

                <div className='max-w-xl mx-auto mt-[45px] relative'>
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder='Enter your mail'
                        className='bg-transparent border rounded-full py-[19px] px-[30px] w-full focus:outline-none text-white placeholder:text-[#ae8da0]'
                    />

                    <button
                        type='submit'
                        className='py-3 px-7 bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-full text-white text-base font-medium capitalize transition-all hover:bg-transparent hover:text-[#B08EAD] hover:bg-white ease-in-out duration-[0.5s] absolute right-[6px] top-[6px]'
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    );
}

export default Productlist;
