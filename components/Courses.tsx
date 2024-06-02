import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import course1 from  '/public/course1.png'

const Courses = () => {
    return (
        <div>
      <div className="flex justify-between gap-[24px]">
<div className="flex justify-between ">
  <div className="flex flex-col gap-[6px] p-4 box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <Image src={course1}/>
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
    <Image src={course1}/>
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
    <Image src={course1}/>
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
    <Image src={course1}/>
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
        </div>
    );
};

export default Courses;