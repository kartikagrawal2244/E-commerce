import React from 'react'
import CardCarousel from '../component/Carousel'
import Delivery from '../comman/Delivery'
import Subscribe from '../comman/Subscribe'
import HeroSection from '../comman/HeroSection'

function About() {
    return (
        <>
            <HeroSection
                heading="About"
            />

            <div className='max-w-3xl mx-auto pt-24 px-7 lg:px-0'>
                <h4 className='text-[#B08EAD] text-xl font-normal mb-3' >Our Mission</h4>

                <p className='text-[#4B3049] font-normal text-2xl mt-[5px] mb-[60px]'>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.</p>

                <img src="/assets/images/81Zt42ioCgL._AC_SX679_.jpg" alt="heroimage" className='mx-auto' />

            </div>

            <Delivery />    

            <div className='bg-[#B08EAD] py-[100px]'>
                <div className='max-w-6xl mx-auto'>
                    <CardCarousel />
                </div>
            </div>

            <Subscribe />
        </>
    )
}

export default About