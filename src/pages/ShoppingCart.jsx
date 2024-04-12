import React from 'react'
import { useCart } from '../Context/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CommanButton } from '../comman/Button';
import { OnclickButton } from '../comman/OnclickButton';
import HeroSection from '../comman/HeroSection';


function ShoppingCart() {
    const { cart, cleardata, increase, decrease, totalamount, handledelete } = useCart();

    return (
        <>
            <HeroSection
                heading="Shopping Cart"
            />

            {cart.length > 0 ?
                <div className='py-[100px] max-w-6xl mx-auto px-8' >
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
                                            &#8377;{item.price}
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

                                        <TableCell>
                                            <p className='text-[#2a2a2a] text-sm font-bold cursor-pointer' onClick={() => handledelete(item.id)}>Delete</p>
                                        </TableCell>

                                        <TableCell>
                                            <p className='text-[#2a2a2a] text-sm font-bold'>&#8377; {(item.price * item.digit).toFixed(2)}</p>
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
                        <p className='text-sm text-[#2a2a2a] font-bold'>&#8377; {totalamount}</p>
                    </div>

                    <div className='py-[60px] md:text-end text-center'>
                        <CommanButton
                            to="/productcheckout"
                            name="Proceed To Checkout"
                        />
                    </div>
                </div>
                :
                <div className='py-[100px] max-w-6xl mx-auto text-center px-8'>
                    <h4 className='text-4xl text-[#B08EAD] font-semibold mt-12 mb-12'>Your Cart is Empty ! </h4>

                    <CommanButton
                        to="/productlist"
                        name="Add Product"
                    />
                </div>
            }
        </>
    )
}

export default ShoppingCart