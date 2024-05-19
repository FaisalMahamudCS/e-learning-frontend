// import Home from "../app/src/";
import Image from "next/image";
import { Inter } from 'next/font/google'
import profile1 from  '/public/profile1.png'
import catagory1 from  '/public/Icon.png'
import course1 from  '/public/course1.png'
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";

export default function HomePage() {
  return (
<div className="bg-[#FFFFFF]">
  <div className="flex justify-between m-[25px] gap-6">
    <div className="flex flex-col gap-6 ">
  <h2 className="text-[40px] text-gray-900 font-bold font-Inter ">Unlock Your Potential with Byway</h2>
<h2>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we 're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.</h2>
<div>
<button className="bg-[#2563EB] w-[255px] h-[51px] text-white">
Start your instruction today
</button>
 
</div>

</div>
<Image src={profile1} />  
</div>
<div className="p-[80px] bg-[#F8FAFC] ">
  <div className="flex justify-between">
   <div>
    <p>250+ Courses</p>
    <p>By Best Mentors</p>
   </div>
   <div>
    <p>250+ Courses</p>
    <p>By Best Mentors</p>
   </div>
   <div>
    <p>250+ Courses</p>
    <p>By Best Mentors</p>
   </div>
  </div>

</div>
<div className="px-[80.5px] py-[80.5px]">
<h2 className="m-[10px] font-bold">Top Catagories</h2>
<div className="flex justify-between  gap-[24px]">
  <div className="px-[93px] py-[24px]  box-border border border-[#E2E8F0] rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <div className=" rounded-[100px] bg-[#E0F2FE] h-[100px] w-[100px] ">
      <div className="flex  items-center   justify-center h-[100px] w-[100px]">
<Image src={catagory1} className=" "/>
</div>

</div>
<p>Astrology</p>
<p>11 Courses</p>
  </div>
  <div className="px-[93px] py-[24px]  box-border border border-[#E2E8F0] rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <div className=" rounded-[100px] bg-[#E0F2FE] h-[100px] w-[100px] ">
      <div className="flex  items-center   justify-center h-[100px] w-[100px]">
<Image src={catagory1} className=" "/>
</div>

</div>
<p>Astrology</p>
<p>11 Courses</p>
  </div>
  <div className="px-[93px] py-[24px]  box-border border border-[#E2E8F0] rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <div className=" rounded-[100px] bg-[#E0F2FE] h-[100px] w-[100px] ">
      <div className="flex  items-center   justify-center h-[100px] w-[100px]">
<Image src={catagory1} className=" "/>
</div>

</div>
<p>Astrology</p>
<p>11 Courses</p>
  </div>
  <div className="px-[93px] py-[24px]  box-border border border-[#E2E8F0] rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
    <div className=" rounded-[100px] bg-[#E0F2FE] h-[100px] w-[100px] ">
      <div className="flex  items-center   justify-center h-[100px] w-[100px]">
<Image src={catagory1} className=" "/>
</div>

</div>
<p>Astrology</p>
<p>11 Courses</p>
  </div>

</div>
</div>
<div className="px-[80.5px] py-[80.5px]">
<h2 className="m-[10px] font-bold">Top Courses</h2>
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
</div> 
 );
}
