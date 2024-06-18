"use client"
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Navbar from './Navbar'
import login from  '../public/login.png'
import Image from 'next/image';
import Input from './Input';
import InputComponent from './Input';
import LabelComponent from './Label'
import Button from './Home/Button'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
type Props = {
}

function Login({}: Props) {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [inputValue, setInputValue] = useState('');

  return (
    <>
 <Navbar/>
       <div className="flex justify-between gap-[40px]">

<div className='ml-[80px]'>
    <h2 className='text-center text-[32px] mt-[94px] font-bold'>Sign in to your account</h2>
   
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='Email'/>
    <div className=" ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Email '/>
   
    </div>
    </div>
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='Password'/>
    <div className=" ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Password'/>
   
    </div>
    </div>
    
    <Button label='Sign In' classNames='bg-[#020617] w-[183px] h-[51px] text-white mt-[22px]'/>
    <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline"
                >Continue with Google</button>
</div>
<div>
    <Image src={login}/>
</div>
       </div>
    </>

   )
}

export default Login