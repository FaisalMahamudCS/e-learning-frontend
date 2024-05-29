"use client"
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Navbar from './Navbar'
import signbg from  '../public/signbg.png'
import Image from 'next/image';
import Input from './Input';
import InputComponent from './Input';
import LabelComponent from './Label'
import Button from './Home/Button'
type Props = {
}

function Signup({}: Props) {
    const [inputValue, setInputValue] = useState('');

  return (
    <>
 <Navbar/>
       <div className="flex justify-between gap-[40px]">
<div>
    <Image src={signbg}/>
</div>
<div className='mr-[80px]'>
    <h2 className='text-center text-[32px] mt-[94px] font-bold'>Create your account</h2>
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='Full Name'/>
    <div className="flex justify-between gap-4  ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    </div>
    </div>
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='User Name'/>
    <div className=" ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='User Name'/>
   
    </div>
    </div>
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='Email'/>
    <div className=" ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Email'/>
   
    </div>
    </div>
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='Full Name'/>
    <div className="flex justify-between gap-4  ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    </div>
    </div>
    <Button label='Create Account' classNames='bg-[#020617] w-[183px] h-[51px] text-white mt-[22px]'/>
</div>

       </div>
    </>

   )
}

export default Signup