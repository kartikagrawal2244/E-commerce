import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Link, useParams } from 'react-router-dom';
import { useProduct } from '../Context';
import { useCart } from '../Context/CartContext';



function ProductDetail() {
    const { id } = useParams();
    const { product } = useProduct();
    const [currentProduct, setCurrentProduct] = useState([]);
    // const [digit, setDigit] = useState(1);
    const { addtocart } = useCart();

    const digit = 1;


    useEffect(() => {

        const savedProduct = JSON.parse(localStorage.getItem('currentProduct'))
        console.log(savedProduct);

        if (savedProduct && savedProduct.id === parseInt(id)) {
            setCurrentProduct(savedProduct);
        } else {
            const selectedProduct = product.find(item => item.id === parseInt(id));
            setCurrentProduct(selectedProduct);
            localStorage.setItem('currentProduct', JSON.stringify(selectedProduct))
        }
    }, [id, product]);

    return (
        <>
            <div className='bg-[#B08EAD] h-[350px]'>
            </div>

            <div className='pb-[100px] w-10/12 mx-auto -mt-60' >
                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                >
                    <div>
                        <div className='detail-page'>
                            <img src={currentProduct.image} />
                        </div>
                    </div>

                    <div>
                        <div className='detail-page'>
                            <img src={currentProduct.image} />
                        </div>
                    </div>

                    <div>
                        <div className='detail-page'>
                            <img src={currentProduct.image} />
                        </div>
                    </div>

                    <div>
                        <div className='detail-page'>
                            <img src={currentProduct.image} />
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className='max-w-4xl mx-auto text-center pb-[100px]'>
                <h3 className='text-[40px] leading-normal text-[#4B3049] font-medium max-w-xl mx-auto mb-10'>{currentProduct.title}</h3>

                <p className='text-[#707070] text-base font-normal leading-loose mb-10'>{currentProduct.description}</p>

                <div className='flex justify-center mb-16 items-center'>
                    <h4 className='text-[#795376] text-base font-normal me-3'>Quantity</h4>

                    <input type="text" className='w-10 bg-[#795376] text-center focus:outline-none text-white' readOnly value={digit} />

                    <p className='text-[#795376] text-base font-normal ms-3'> &#36;{currentProduct.price}</p>
                </div>

                <Link to="/shoppingcart" onClick={() => addtocart(currentProduct, digit)} className='py-4 px-12 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium uppercase transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>add to cart</Link>
            </div >

            <div className='bg-[#4B3049] text-center py-[200px]'>
                <h2 className='text-white text-[40px] leading-normal font-semibold mb-2'>Get promotions & updates!</h2>

                <p className='text-white text-base font-normal max-w-3xl mx-auto'>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>

                <div className='max-w-xl mx-auto mt-[45px] relative'>
                    <input type="email" name="" id="" placeholder='Enter your mail' className='bg-transparent border rounded-full py-[19px] px-[30px] w-full focus:outline-none text-white placeholder:text-[#ae8da0]' />

                    <button type='submit' className='py-3 px-7 bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-full text-white text-base font-medium capitalize transition-all hover:bg-transparent hover:text-[#B08EAD] hover:bg-white ease-in-out duration-[0.5s] absolute right-[6px] top-[6px]' >Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;