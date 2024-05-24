// import Home from "../app/src/";
import Image from "next/image";
import { Inter } from 'next/font/google'
import profile1 from  '/public/profile1.png'
import catagory1 from  '/public/Icon.png'
import course1 from  '/public/course1.png'
import review1 from  '/public/Ellipse61.png'
import teacher1 from  '/public/teacher1.png'
import profile2 from  '/public/profile2.png'
import profile3 from  '/public/profile3.png'
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import Button from "../../components/Home/Button";

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
<div className="px-[80.5px] py-[80.5px] ">
<h1 className="font-bold mb-[10px]">Top Instructor</h1>
<div className="flex justify-between gap-4">
<div className="flex px-[17.5px] py-[16px] flex-col box-border   border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white ">
<Image src={teacher1}/>
<div className="flex items-center justify-between flex-col mt-4">
<p className="font-bold">Ronald Richard</p>
<p>UI/UX Designer</p>
</div>
<div className="border border-gray-200 my-4">

</div>
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>4.9

<p>120 Students</p>
</div>
</div>
<div className="flex px-[17.5px] py-[16px] flex-col box-border   border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white ">
<Image src={teacher1}/>
<div className="flex items-center justify-between flex-col mt-4">
<p className="font-bold">Ronald Richard</p>
<p>UI/UX Designer</p>
</div>
<div className="border border-gray-200 my-4">

</div>
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>4.9

<p>120 Students</p>
</div>
</div>
<div className="flex px-[17.5px] py-[16px] flex-col box-border   border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white ">
<Image src={teacher1}/>
<div className="flex items-center justify-between flex-col mt-4">
<p className="font-bold">Ronald Richard</p>
<p>UI/UX Designer</p>
</div>
<div className="border border-gray-200 my-4">

</div>
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>4.9

<p>120 Students</p>
</div>
</div>
<div className="flex px-[17.5px] py-[16px] flex-col box-border   border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white ">
<Image src={teacher1}/>
<div className="flex items-center justify-between flex-col mt-4">
<p className="font-bold">Ronald Richard</p>
<p>UI/UX Designer</p>
</div>
<div className="border border-gray-200 my-4">

</div>
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>4.9

<p>120 Students</p>
</div>
</div>
<div className="flex px-[17.5px] py-[16px] flex-col box-border   border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white ">
<Image src={teacher1}/>
<div className="flex items-center justify-between flex-col mt-4">
<p className="font-bold">Ronald Richard</p>
<p>UI/UX Designer</p>
</div>
<div className="border border-gray-200 my-4">

</div>
<div className="flex justify-between items-center">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>4.9

<p>120 Students</p>
</div>
</div>

</div>

</div>
<div className="px-[80.5px] py-[80.5px] ">
<h1 className="font-bold mb-[10px]">Top Review</h1>
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

</div>
<div className="px-[159.5px] ">
<div className="flex justify-between gap-[174px] ">
  <div>
  <Image src={profile3}/>
  </div>
  <div className="flex items-center justify-center" >
  <div className="flex flex-col ">
  <p className="font-bold mb-2">Become an Instructor</p>
  <p className="mb-4">Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
  <Button label="Start Your Instructor Journey"/>
  </div>
  </div>
  
</div>
</div>
<div className="px-[159.5px] ">
<div className="flex justify-between gap-[174px] ">
 
  <div className="flex items-center justify-center" >
  <div className="flex flex-col ">
  <p className="font-bold mb-2">Transform your life through education</p>
  <p className="mb-4">ILearners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
  <Button label="Checkout Courses"/>
  </div>
  </div>
  <div>
  <Image src={profile2}/>
  </div>
</div>
</div>

</div>

 );
}
