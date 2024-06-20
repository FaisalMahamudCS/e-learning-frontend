import Image from 'next/image';
import React from 'react';
import logo from  '/public/logo.png'
import logo2 from  '/public/logo2.png'
const Footer = () => {
    return (
        <>
        <div className="bg-[#1E293B] text-white flex justify-between gap-[122px] px-[80px] py-[80px]">

<div className="flex flex-col text-white  ">
  <Image src={logo2} alt='alt footer'/>
  <p>Empowering learners through accessible and engaging online education.
Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </p>
</div>
<div className="flex flex-col">
  <p>Get Help</p>
  <p>Contact Us</p>
  <p>Latest</p>
  <p>Faq</p>
</div>
  <div className="flex flex-col">
    <p>Program</p>
    <p>Art </p>
    <p>Design</p>
    <p>Faq</p>
  </div>
  <div className="flex flex-col">
    <p>Contact US</p>
    <p>Address: 123 Main Street, Anytown, CA 12345 </p>
    <p>Tel: +(123) 456-7890</p>
    <p>Mail  test@mail.com</p>
    <Image src={logo} alt='adv'/>
  </div>
</div>
        </>
    );
};

export default Footer;