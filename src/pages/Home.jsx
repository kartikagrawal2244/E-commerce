import React, { useEffect, useState } from 'react'
import CardCarousel from '../component/Carousel'
import Delivery from '../comman/Delivery'
import { Link } from 'react-router-dom'
import Subscribe from '../comman/Subscribe'

function Home() {

    const [productlist, setProductlist] = useState([]);

    function getapi() {
        fetch(`https://fakestoreapi.com/products?limit=6`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProductlist(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getapi()
    }, [])


    return (
        <>
            <div className='max-w-6xl mx-auto py-16 lg:px-0 px-7 grid lg:grid-cols-2 gap-20'>
                <div>
                    <img src="/assets/images/81Zt42ioCgL._AC_SX679_.jpg" alt="heroimage" className='w-11/12 mx-auto my-auto' />
                </div>

                <div className='w-5/6 my-auto'>
                    <h1 className='text-[68px] font-medium leading-[78px] mb-[10px] text-[#4B3049] uppercase'>Best quality GAMING MONITOR</h1>
                    <p className='text-xl font-medium text-[#4B3049] mb-12 uppercase'>SAMSUNG 49-INCH CHG90 144HZ CURVED GAMING MONITOR SUPER ULTRAWIDE SCREEN QLED</p>

                    <Link to="/productlist" className='py-4 px-12 bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] text-white text-base font-medium capitalize transition-all hover:bg-transparent hover:text-[#B08EAD] ease-in-out duration-[0.5s]'>shop now</Link>
                </div>
            </div>

            <div className='max-w-6xl mx-auto py-16 lg:px-0 px-7 grid lg:grid-cols-2 gap-20'>
                <div className='my-auto lg:order-1 order-2'>
                    {/* <h5 className='text-xl font-medium mb-4 text-[#B08EAD] uppercase'>Started from $10</h5> */}

                    <h5 className='text-[40px] leading-normal font-medium text-[#4B3049] hover:text-[#795376] inline-block mb-4 uppercase transition ease-in-out duration-[0.5s]'>
                        WHITE GOLD PLATED PRINCESS
                    </h5>

                    <p className='text-xl font-medium mb-12 text-[#B08EAD'>Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...</p>

                    <Link to="/productlist" className='py-4 px-12 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium uppercase transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>shop now</Link>
                </div>

                <div className='lg:order-2 order-1'>
                    <img src="/assets/images/71YAIFU48IL._AC_UL640_QL65_ML3.jpg" alt="heroimage" className='w-3/4 mx-auto my-auto shadow-3xl' />
                </div>
            </div>

            <div className='max-w-6xl mx-auto py-16 grid lg:grid-cols-2 lg:px-0 px-7 gap-20'>
                <div>
                    <img src="/assets/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY.jpg" alt="heroimage" className='w-3/4 my-auto mx-auto shadow-4xl' />
                </div>

                <div className='my-auto'>
                    {/* <h5 className='text-xl font-medium mb-4 text-[#B08EAD] uppercase'>Started from $10</h5> */}

                    <h5 className='text-[40px] leading-normal font-medium text-[#4B3049] hover:text-[#795376] inline-block mb-4 uppercase transition ease-in-out duration-[0.5s]'>
                        MENS CASUAL PREMIUM SLIM FIT T-SHIRTS
                    </h5>

                    <p className='text-xl font-medium mb-12 text-[#B08EAD'>Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. </p>

                    <Link to="/productlist" className='py-4 px-12 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium uppercase transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>shop now</Link>
                </div>
            </div>

            <div className='max-w-6xl mx-auto py-16 grid lg:grid-cols-2 lg:px-0 px-7 gap-20'>
                <div className='my-auto lg:order-1 order-2'>
                    {/* <h5 className='text-xl font-medium mb-4 text-[#B08EAD] uppercase'>Started from $10</h5> */}

                    <h5 className='text-[40px] leading-normal font-medium text-[#4B3049] hover:text-[#795376] inline-block mb-4 uppercase transition ease-in-out duration-[0.5s]'>
                        Rain Jacket Women Windbreaker Striped Climbing Raincoats
                    </h5>

                    <p className='text-xl font-medium mb-12 text-[#B08EAD'>Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined. </p>

                    <Link to="/productlist" className='py-4 px-12 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium uppercase transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>shop now</Link>
                </div>

                <div className='lg:order-2 order-1'>
                    <img src="/assets/images/71HblAHs5xL._AC_UY879.jpg" alt="heroimage" className='w-3/4 mx-auto my-auto shadow-3xl' />
                </div>
            </div>

            <div className='max-w-6xl mx-auto py-16 grid lg:grid-cols-2 lg:px-0 px-7 gap-20'>
                <div>
                    <img src="/assets/images/81fPKd-2AYL._AC_SL1500.jpg" alt="heroimage" className='w-3/4 mx-auto my-auto shadow-3xl' />
                </div>

                <div className='my-auto'>
                    {/* <h5 className='text-xl font-medium mb-4 text-[#B08EAD] uppercase'>Started from $10</h5> */}

                    <h5 className='text-[40px] leading-normal font-medium text-[#4B3049] hover:text-[#795376] inline-block mb-4 uppercase transition ease-in-out duration-[0.5s]'>
                        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                    </h5>

                    <p className='text-xl font-medium mb-12 text-[#B08EAD'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>

                    <Link to="/productlist" className='py-4 px-12 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium uppercase transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>shop now</Link>
                </div>
            </div>

            <div className='bg-[#F4EDF2]'>
                <div className='max-w-6xl mx-auto pt-[200px] pb-[130px]'>
                    <h2 className='text-[#4B3049] text-4xl font-bold text-center'>Trending Items</h2>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:px-0 px-7 gap-20 mt-16'>

                        {productlist.map((product, index) => (
                            <div key={index}>
                                <img src={product.image} alt="treding_poduct" className='w-80 mx-auto' />

                                <Link to="productlist" className='text-2xl mt-[22px] font-medium text-[#4B3049] hover:text-[#795376] inline-block mb-2 uppercase transition ease-in-out duration-[0.5s]'>
                                    {product.title}
                                </Link>

                                <p className='text-xl font-normal text-[#795376] capitalize line-clamp-3'>{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='bg-[#B08EAD] py-[100px]'>
                <div className='max-w-6xl mx-auto'>
                    <CardCarousel />
                </div>
            </div>

            <Delivery />

            <Subscribe />
        </>
    )
}

export default Home