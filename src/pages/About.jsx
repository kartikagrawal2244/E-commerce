import React from 'react'
import CardCarousel from '../component/Carousel'
import Delivery from '../comman/Delivery'
import Subscribe from '../comman/Subscribe'

function About() {
    return (
        <>
            <div className='bg-[#B08EAD] py-[150px] text-[50px] leading-tight font-medium capitalize'>
                <h1 className='text-center text-white'>About</h1>
            </div>

            <div className='max-w-3xl mx-auto py-36'>
                <h4 className='text-[#B08EAD] text-xl font-normal mb-3' >Our Mission</h4>

                <p className='text-[#4B3049] font-normal text-2xl mt-[5px] mb-[60px]'>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.</p>

                <iframe width="853" height="480" src="https://www.youtube.com/embed/ZwnXW_7fzk0?si=D5MW_PIvKJl3Oxjb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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