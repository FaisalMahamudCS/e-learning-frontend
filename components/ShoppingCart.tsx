/* eslint-disable react/no-children-prop */
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import cart from  '/public/cart.png'
import StarRating from './StartRating';
import OrderDetails from './OrderDetails';
import Heading from './Heading';
import Button from './Home/Button';
import Footer from './Footer';

const ShoppingCart = () => {
    return (
        <div>
            <Navbar/>
            <div className='mt-[40px] mx-[80px]'>
                <h2 className='font-bold text-[32px] '>Shopping Cart</h2>
                <p className='mt-[30px] mb-2'>1 Course In Cart</p>
                <div className="flex gap-[87px]">
                    <div className=''>
                 <div className='flex gap-2 p-2 border border-gray-200 rounded-lg bg-white'>
                    <div>
                    <Image src={cart}/>
                    </div>
                    <div>
                    <div className='flex justify-between gap-[214px]'>
                    <p>Introduction to User Experience Design</p> <p>$45.00</p>
                    </div>
                    <p>By John Doe</p>
                    <div className='flex gap-2'>
                    <p>22 Total Hours. 155 Lectures. All levels</p>
                    <StarRating reviews={120}/>
                    </div>
                    <Button label='Remove' classNames='text-[#DC2626]'/>
                    </div>
                 </div>
                    </div>
                    <div>
                    <Heading children="Order Details"/>

                        <OrderDetails discount={200} price={300} tax={20} total={500}/>
                     <Button label='Proceed To Checkout' classNames='w-[352px] h-12 flex flex-row justify-center items-center px-6 py-2.5 my-4 rounded-md bg-[#020617] text-white'/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ShoppingCart;