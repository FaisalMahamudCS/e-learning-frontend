"use client"
import React from 'react';
import Button from './Home/Button';
import Searchbar from './Searchbar';
import Image from 'next/image';
import logo2 from  '../public/logo2.png'
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router=useRouter()

    const onClick=()=>{
        router.push('/signup')
    }
    const loginClick=()=>{
        router.push('/login')
    }
    return (
       <>
       <div className="flex justify-between items-center content-center px-[10px]">

<div className="flex justify-between items-center">
<Image src={logo2} className="" alt='Image' />

<p>Learnhub</p>
</div>
<div className="">
<Searchbar placeholder="Search Your course"/>

</div>
<p>Catagories</p>
<Button label="Login" onClick={loginClick} classNames="h-[40px]"/>
<Button label="Sign Up" classNames="h-[40px]" onClick={onClick}/>
</div></>
    );
};

export default Navbar;