import React from 'react';
import { IoIosStar } from 'react-icons/io';
import teacher1 from  '/public/teacher1.png'
import Image from 'next/image';

const Mentors = () => {
    return (
        <div className="px-[80.5px] py-[80.5px] ">
<h1 className="font-bold mb-[10px]">Top Instructor</h1>
<div className="flex justify-between gap-4">
<div className="flex px-[17.5px] py-[16px] flex-col box-border   border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white ">
<Image src={teacher1} alt='Teacher'/>
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
<Image src={teacher1} alt='teacher1'/>
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
<Image src={teacher1} alt='teacher2'/>
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
<Image src={teacher1} alt='teacher3'/>
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
<Image src={teacher1} alt='teacher4'/>
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
    );
};

export default Mentors;