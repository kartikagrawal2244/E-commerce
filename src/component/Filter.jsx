import React from "react";
import { useProduct } from "../Context";
import { useFilter } from "../Context/FilterContext";

function Filter() {

    const {product} = useProduct();

    const { handleSearchChange, filter, handleCategoryChange, handleSortby } = useFilter();

    const { text, category, sortby } = filter;

    const uniqueCategories = Array.from(new Set(product.map((item) => item.category)));

    return (
        <div className='flex xl:flex-col md:flex-row flex-col justify-between'>
            {/* Search Input */}
            <div className='mb-6'>
                <input
                    type="search"
                    placeholder='Search'
                    name="search"
                    id="search"
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
                    name="category"
                    id="category"
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
                    name="sortby"
                    id="sortby"
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
    );
}

export default Filter;
