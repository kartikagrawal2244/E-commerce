
function ShoppingCart({image , text}) {
    return (
        <div className='text-center border border-[#E4D3DF] p-9'>
            <img src={image} alt="" className='mx-auto' />
            <p className='text-lg font-normal text-[#4B3049] capitalize mt-5'>{text}</p>
        </div>
    )
}

export default ShoppingCart