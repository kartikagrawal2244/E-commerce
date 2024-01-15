import React from 'react'
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CommanButton } from '../comman/Button';
import { OnclickButton } from '../comman/OnclickButton';


function ShoppingCart() {
    const { cart, cleardata, increase, decrease, shipping, totalamount, handledelete } = useCart();

    return (
        <>
            <div className='bg-[#B08EAD] py-[150px] text-[50px] leading-tight font-medium capitalize'>
                <h1 className='text-center text-white'>Cart List</h1>
            </div>

            {cart.length > 0 ?
                <div className='py-[100px] max-w-6xl m-auto px-8' >
                    <TableContainer className='border-[#dddddd] border-b'>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='text-sm text-[#795376] font-medium'>
                                        <div className='py-4 text-sm text-[#795376] font-semibold'>Product</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className='py-4 text-sm text-[#795376] font-semibold'>Name</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className='py-4 text-sm text-[#795376] font-semibold'>Price</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className='py-4 text-sm text-[#795376] font-semibold'>Quantity</div>
                                    </TableCell>

                                    <TableCell width={155}>
                                        <div className='py-4 text-sm text-[#795376] font-semibold'>Remove item</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className='py-4 text-sm text-[#795376] font-semibold'>Total</div>
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {cart.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            <div className='w-[200px] me-10 my-6'>
                                                <img src={item.image} alt="" />
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <p className='text-[#795376] text-[15px] font-normal'>{item.name}</p>
                                        </TableCell>

                                        <TableCell>
                                            <p className='text-[#2a2a2a] text-sm font-bold text-center'>
                                                &#36;{item.price}
                                            </p>
                                        </TableCell>

                                        <TableCell>
                                            <div className='flex'>
                                                <input type="text" value={item.digit} className='w-10 border border-[#eeeeee] text-center focus:outline-none' readOnly />

                                                <div className='flex flex-col text-center'>
                                                    <span className='border border-[#dddddd] cursor-pointer px-[10px]' onClick={() => increase(item.id)}>+</span>

                                                    <span className='border border-[#dddddd] px-[10px] cursor-pointer' onClick={() => decrease(item.id)}>-</span>
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell onClick={() => handledelete(item.id)}>
                                            <p className='text-[#2a2a2a] text-sm font-bold cursor-pointer'>Delete</p>
                                        </TableCell>

                                        <TableCell>
                                            <p className='text-[#2a2a2a] text-sm font-bold'>&#36;{(item.price * item.digit).toFixed(2)}</p>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div className='md:flex justify-between py-[60px] border-[#dddddd] border-b items-center text-center'>
                        <div className='md:mb-0 mb-10'>
                            <CommanButton
                                to="/productlist"
                                name="Continue shopping"
                            />
                        </div>

                        <div>
                            <OnclickButton
                                onClick={cleardata}
                                name="clear cart"
                            />
                        </div>
                    </div>

                    <div className='flex justify-end py-[60px] border-[#dddddd] border-b'>
                        <p className='text-sm text-[#2a2a2a] font-bold me-40'>Subtotal</p>
                        <p className='text-sm text-[#2a2a2a] font-bold'>&#36;{totalamount}</p>
                    </div>

                    <div className='md:flex justify-end py-[60px] items-center text-center'>
                        <div className='md:mb-0 mb-16 md:me-5'>
                            <CommanButton
                                to="/productlist"
                                name="Continue shopping"
                            />
                        </div>

                        <div>
                            <CommanButton
                                to="/productlist"
                                name="Proceed To Checkout"
                            />
                        </div>
                    </div>


                    {/* 
                    <div className='flex justify-end py-[60px] border-[#dddddd] border-b'>
                        <p className='text-sm text-[#2a2a2a] font-bold me-40'>Shipping</p>

                        <p className='text-sm text-[#2a2a2a] font-bold'>&#36;{shipping}</p>
                    </div>

                    <div className='flex justify-end py-[60px] border-[#dddddd] border-b'>
                        <p className='text-sm text-[#2a2a2a] font-bold me-40'>Total</p>

                        <p className='text-sm text-[#2a2a2a] font-bold'>&#36;{totalamount + shipping}</p>
                    </div> */}
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