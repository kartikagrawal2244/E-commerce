import React from 'react'
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

function ShoppingCart() {
    const { cart, cleardata, increase, decrease, shipping, totalamount, handledelete } = useCart();

    return (
        <>
            <div className='bg-[#B08EAD] py-[150px] text-[50px] leading-tight font-medium capitalize'>
                <h1 className='text-center text-white'>Cart List</h1>
            </div>

            {cart.length > 0 ?
                <div className='py-[100px] max-w-6xl m-auto px-8' >
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className='text-start py-4 text-sm text-[#795376] font-medium'>Product</th>
                                <th className='text-start py-4 text-sm text-[#795376] font-medium'>Name</th>
                                <th className='text-start py-4 text-sm text-[#795376] font-medium'>Price</th>
                                <th className='text-start py-4 text-sm text-[#795376] font-medium'>Quantity</th>
                                <th className='text-start py-4 text-sm text-[#795376] font-medium'>Remove item</th>
                                <th className='text-start py-4 text-sm text-[#795376] font-medium'>Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cart.map((item) => {
                                return (
                                    <tr key={item.id} className="border-[#dddddd] border-y">
                                        <td>
                                            <div className='flex items-center'>
                                                <div className='max-w-[150px] me-10 border border-[#eeeeee] rounded-[3px] my-6'>
                                                    <img src={item.image} alt="" />
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                <p className='text-[#795376] text-[15px] font-normal'>{item.name}</p>
                                            </div>
                                        </td>

                                        <td className='text-[#2a2a2a] text-sm font-bold'> &#8377; {item.price}</td>

                                        <td>
                                            <div className='flex'>
                                                <input type="text" value={item.digit} className='w-10 border border-[#eeeeee] text-center focus:outline-none' readOnly />

                                                <div className='flex flex-col text-center'>
                                                    <span className='border border-[#dddddd] cursor-pointer px-[10px]' onClick={() => increase(item.id)}>+</span>

                                                    <span className='border border-[#dddddd] px-[10px] cursor-pointer' onClick={() => decrease(item.id)}>-</span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className='text-[#2a2a2a] text-sm font-bold cursor-pointer' onClick={() => handledelete(item.id)} >Delete</td>

                                        <td className='text-[#2a2a2a] text-sm font-bold'>&#8377; {(item.price * item.digit).toFixed(2)}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>

                    <div className='md:flex justify-between py-[60px] border-[#dddddd] border-b items-center text-center'>
                        <div className='md:mb-0 mb-10'>
                            <Link to="/productlist" className='py-4 px-12 bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] text-white text-base font-medium transition-all hover:bg-transparent hover:text-[#B08EAD] ease-in-out duration-[0.5s] uppercase'>Continue shopping</Link>
                        </div>

                        <div>
                            <button onClick={cleardata} className='py-4 px-12 bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] text-white text-base font-medium transition-all hover:bg-transparent hover:text-[#B08EAD] ease-in-out duration-[0.5s] uppercase'>clear cart</button>
                        </div>
                    </div>

                    <div className='flex justify-end py-[60px] border-[#dddddd] border-b'>
                        <p className='text-sm text-[#2a2a2a] font-bold me-40'>Subtotal</p>
                        <p className='text-sm text-[#2a2a2a] font-bold'>&#8377; {totalamount}</p>
                    </div>

                    <div className='flex justify-end py-[60px] border-[#dddddd] border-b'>
                        <p className='text-sm text-[#2a2a2a] font-bold me-40'>Shipping</p>

                        <p className='text-sm text-[#2a2a2a] font-bold'>&#8377; {shipping}</p>
                    </div>

                    <div className='flex justify-end py-[60px] border-[#dddddd] border-b'>
                        <p className='text-sm text-[#2a2a2a] font-bold me-40'>Total</p>

                        <p className='text-sm text-[#2a2a2a] font-bold'>&#8377; {totalamount + shipping}</p>
                    </div>
                </div>
                :
                <div className='text-center'>
                    <h4 className='text-4xl text-[#B08EAD] font-semibold mt-12 mb-12'>Your Cart is Empty ! </h4>

                    <Link to="/productlist" className='py-4 px-12 bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] text-white text-base font-medium transition-all hover:bg-transparent hover:text-[#B08EAD] ease-in-out duration-[0.5s] uppercase'>Add Product</Link>
                </div>
            }
        </>
    )
}

export default ShoppingCart