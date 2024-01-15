import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function CardCarousel() {
    return (
        <div className='bg-[#B08EAD] py-[100px]'>
            <div className='max-w-6xl mx-auto'>
                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                >
                    <div>
                        <div className='w-8/12 mx-auto'>
                            <div className="relative after:absolute after:content-['\275D'] after:pt-[10px] after:text-5xl after:bg-[#E4D3DF] xl:after:right-80 lg:after:right-[280px] md:after:right-[200px] after:right-[85px] after:bottom-[-10px] after:h-[50px] after:w-[50px] after:rounded-full after:text-white after:font-[Flaticon]">
                                <img src="/assets/images/client_1.png.webp" />
                            </div>

                            <p className='text-2xl text-white mt-10 font-medium'>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                            <h6 className='text-base text-white mt-7 font-normal'>- Micky Mouse</h6>
                        </div>
                    </div>

                    <div>
                        <div className='w-8/12 mx-auto'>
                            <div className="relative after:absolute after:content-['\275D'] after:pt-[10px] after:text-5xl after:bg-[#E4D3DF] xl:after:right-80 lg:after:right-[280px] md:after:right-[200px] after:right-[85px] after:bottom-[-10px] after:h-[50px] after:w-[50px] after:rounded-full after:text-white after:font-[Flaticon]">
                                <img src="/assets/images/client_1.png.webp" />
                            </div>

                            <p className='text-2xl text-white mt-10 font-medium'>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                            <h6 className='text-base text-white mt-7 font-normal'>- Micky Mouse</h6>
                        </div>
                    </div>

                    <div>
                        <div className='w-8/12 mx-auto'>
                            <div className="relative after:absolute after:content-['\275D'] after:pt-[10px] after:text-5xl after:bg-[#E4D3DF] xl:after:right-80 lg:after:right-[280px] md:after:right-[200px] after:right-[85px] after:bottom-[-10px] after:h-[50px] after:w-[50px] after:rounded-full after:text-white after:font-[Flaticon]">
                                <img src="/assets/images/client_1.png.webp" />
                            </div>

                            <p className='text-2xl text-white mt-10 font-medium'>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                            <h6 className='text-base text-white mt-7 font-normal'>- Micky Mouse</h6>
                        </div>
                    </div>
                </Carousel >
            </div>
        </div>
    )
}

export default CardCarousel;