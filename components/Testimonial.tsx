import Image from 'next/image';
import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import review1 from  '/public/Ellipse61.png'

const Testimonial = () => {
    return (
        <div className="flex justify-between gap-4">
        <div className="flex p-[24px] flex-col box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white  ">
        <ImQuotesLeft className=" w-[35.66px] h-[27.35px] text-[#3B82F6]"/>
        
        <p>"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. </p>
        <div className="flex my-2 ">
        <Image src={review1}/>
        <div className="flex flex-col ml-[8px]">
        <p className="font-bold mt-[5px]">Jane Doe</p>
        <p>Designer</p>
        </div>
        </div>
        </div>
        <div className="flex p-[24px] flex-col box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white  ">
        <ImQuotesLeft className=" w-[35.66px] h-[27.35px] text-[#3B82F6]"/>
        
        <p>"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. </p>
        <div className="flex my-2 ">
        <Image src={review1}/>
        <div className="flex flex-col ml-[8px]">
        <p className="font-bold mt-[5px]">Jane Doe</p>
        <p>Designer</p>
        </div>
        </div>
        </div>
        <div className="flex p-[24px] flex-col box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white  ">
        <ImQuotesLeft className=" w-[35.66px] h-[27.35px] text-[#3B82F6]"/>
        
        <p>"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. </p>
        <div className="flex my-2 ">
        <Image src={review1}/>
        <div className="flex flex-col ml-[8px]">
        <p className="font-bold mt-[5px]">Jane Doe</p>
        <p>Designer</p>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Testimonial;