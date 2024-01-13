import ShoppingCart from '../comman/ShoppingCart'

function Delivery() {
    return (
        <div className='max-w-6xl mx-auto py-[200px]'>
            <div className='grid lg:grid-cols-2 xl:px-0 px-7 gap-20'>
                <div>
                    <h1 className='text-[40px] leading-normal font-medium text-[#4B3049]'>Credibly innovate granular internal or organic sources whereas standards.</h1>
                </div>

                <div>
                    <p className='text-[#707070] text-base font-normal'>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
                </div>
            </div>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:px-0 px-7 mt-28 gap-10'>
                <div>
                    <ShoppingCart
                        image="/assets/images/feature_icon_1.svg"
                        text="Credit Card Support"
                    />
                </div>

                <div>
                    <ShoppingCart
                        image="/assets/images/feature_icon_2.svg"
                        text="Online Order"
                    />
                </div>

                <div>
                    <ShoppingCart
                        image="/assets/images/feature_icon_3.svg"
                        text="Free Delivery"
                    />
                </div>

                <div>
                    <ShoppingCart
                        image="/assets/images/feature_icon_4.svg"
                        text="Product with Gift"
                    />
                </div>
            </div>
        </div>
    )
}

export default Delivery;