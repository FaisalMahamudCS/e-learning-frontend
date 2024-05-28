"use client"
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Navbar from './Navbar'
import signbg from  '../public/signbg.png'
import Image from 'next/image';
import Input from './Input';
import InputComponent from './Input';
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
    <h2 className='text-center'>Create your account</h2>
    <div className="flex justify-between gap-4  ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    </div>
</div>

       </div>
    </>

   )
}

export default Signup