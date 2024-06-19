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
import { IoIosStar } from 'react-icons/io'
import course1 from  '/public/course1.png'
import Mentors from './Mentors'
import Footer from './Footer'

type Props = {
}

function Category({}: Props) {
    const [inputValue, setInputValue] = useState('');

  return (
    <>
    <Navbar/>
<div className="flex justify-between gap-[24px]">
<div className="flex justify-between ">
  <div className="flex flex-col gap-[6px] p-4 box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <Image src={course1} alt='Course'/>
    <p className="font-bold">Beginner Guide to design</p>
<p>By Ronald Richards</p>
<div className="flex justify-between">
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<p>120 Reviews</p>
</div>
</div>
<p>22 Total Hours. 155 Lectures. Beginner</p>
<p  className="font-bold">$149.9</p>
  </div>
  <div></div>
  <div></div>
  <div></div>

</div>
<div className="flex justify-between ">
  <div className="flex flex-col gap-[6px] p-4 box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <Image src={course1} alt='Course'/>
    <p className="font-bold">Beginner Guide to design</p>
<p>By Ronald Richards</p>
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<p>120 Reviews</p>
</div>
<p>22 Total Hours. 155 Lectures. Beginner</p>
<p  className="font-bold">$149.9</p>
  </div>
  <div></div>
  <div></div>
  <div></div>

</div>
<div className="flex justify-between ">
  <div className="flex flex-col gap-[6px] p-4 box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <Image src={course1} alt='Course'/>
    <p className="font-bold">Beginner Guide to design</p>
<p>By Ronald Richards</p>
<div className="flex justify-between">
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<p>120 Reviews</p>
</div>
</div>
<p>22 Total Hours. 155 Lectures. Beginner</p>
<p  className="font-bold">$149.9</p>
  </div>
  <div></div>
  <div></div>
  <div></div>

</div>
<div className="flex justify-between ">
  <div className="flex flex-col gap-[6px] p-4 box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <Image src={course1} alt='Course'/>
    <p className="font-bold">Beginner Guide to design</p>
<p>By Ronald Richards</p>
<div className="flex justify-between">
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<p>120 Reviews</p>
</div>
</div>
<p>22 Total Hours. 155 Lectures. Beginner</p>
<p  className="font-bold">$149.9</p>
  </div>
  <div></div>
  <div></div>
  <div></div>

</div>
</div>
<Mentors/>
<Footer/>
    </>

   )
}

export default Category