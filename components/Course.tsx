import React from 'react';
import Navbar from './Navbar';
import image4 from  '/public/image4.png'
import ellipse4 from  '/public/ellipse4.png'
import Ellipse19 from  '/public/Ellipse19.png'
import ellipse5 from  '/public/ellipse5.png'
import Image from 'next/image';
import Button from './Home/Button';
import { IoIosStar } from 'react-icons/io';
import Testimonial from './Testimonial';
import Courses from './Courses';
import Footer from './Footer';

const Course = () => {
    return (
        <>
        <Navbar/>
        <div className="flex justify-between">
<div className='pl-[80px]'>
    <p className='text-[40px] mt-[17px] mb-[18px] font-bold'> Introduction to User Experience Design</p>
    <p>This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.</p>
    <div className="flex mt-[24px] justify-between items-center w-[500px] ">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<p>120 Reviews</p>
<p>22 Total Hours. 155 Lectures. All levels</p>
</div>
<div className='flex gap-2 items-center'>
<Image src={ellipse5}/>
<p>Created by Ronal Richards</p>
</div>
<div></div>
</div>
<div>
    <div className='p-[22px]  box-border border border-gray-200 rounded-2xl shadow-md bg-white mr-[82px] mt-[25px]' >
<Image src={image4} className=''/>
<p className='text-[24px] font-bold'>49$</p> 
<Button label='Add To Cart' classNames=' w-[352px] h-12 flex flex-row justify-center items-center px-6 py-2.5 my-4 rounded-md bg-[#020617] text-white'/>
<Button label='Buy Now' classNames='w-[352px] h-12 flex flex-row justify-center items-center px-6 py-2.5  rounded-md bg-[#020617] text-white'/>

</div>

</div>

        </div>
        <div className='pl-[80px] '>
            <div className='w-3/4'>
      <p className='font-semibold'>Course Description</p>  
      <p>This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. </p>
      <p className='font-semibold mt-[24px]'>Certification</p>
      <p>At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.</p>
      <p className='font-semibold mt-[24px]'>Instructor</p>
      <p>Ronald Richards</p>
      <div className='flex justify-between w-[271px] gap-[18px]'>
<div>
    <Image src={ellipse4}/>
    
</div>
<div className='w-[135px] pt-[18px]'>
    <p>40,445 Reviews</p>
    <p>500 Student</p>
    <p>15 Courses</p>
    </div>
      </div>
      With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.
        </div>
        </div>
        <div className='pl-[80px]'>
        <p>Syllabus</p>
        
            <div className='flex w-1/2  border-b border-[#e2e8f0]'>
                <div>

                </div>
            <div className='py-[24px] flex justify-between  gap-[300px] '>
                <div >
                <p>Introduction to UX Design</p>
                </div>
                <div className='flex justify-between gap-3'>
                <p className=''>5 Lesson</p>
                <p>1 hour </p> 
                </div>
            </div>
            </div>
            <div className='flex w-1/2  border-b border-[#e2e8f0]'>
                <div>

                </div>
            <div className='py-[24px] flex justify-between  gap-[300px] '>
                <div >
                <p>Introduction to UX Design</p>
                </div>
                <div className='flex justify-between gap-3'>
                <p className=''>5 Lesson</p>
                <p>1 hour </p> 
                </div>
            </div>
            </div>
            <div className='flex w-1/2  border-b border-[#e2e8f0]'>
                <div>

                </div>
            <div className='py-[24px] flex justify-between  gap-[300px] '>
                <div >
                <p>Introduction to UX Design</p>
                </div>
                <div className='flex justify-between gap-3'>
                <p className=''>5 Lesson</p>
                <p>1 hour </p> 
                </div>
            </div>
            </div>
        </div>
        <div className='pl-[80px] mt-[48px]'>
            <h1 className='font-semibold'>Learner Review</h1>
            <div className='flex gap-1 mt-[24px]  '>
    <IoIosStar className="text-[#EAB308]"/>

 <p className='font-bold'>4.5</p>
 <p>146,951 reviews</p>
    </div>
<div className="flex gap-[163px] ">
   
<div> <div className="flex mt-[16px] justify-between items-center w-[132px]  ">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
80%
</div>
<div className="flex mt-[16px] justify-between items-center w-[132px] ">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
80%
</div>
<div className="flex mt-[16px] justify-between items-center w-[132px] ">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className='text-[#CBD5E1]'/>
<IoIosStar  className='text-[#CBD5E1]'/>
<IoIosStar  className='text-[#CBD5E1]'/>
20%
</div>
<div className="flex mt-[16px] justify-between items-center w-[132px] ">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className='text-[#CBD5E1]'/>
<IoIosStar  className='text-[#CBD5E1]'/>
70%
</div>
<div className="flex mt-[16px] justify-between items-center w-[132px] ">
{/* <CiStar /> */}
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className="text-[#EAB308]"/>
<IoIosStar  className='text-[#CBD5E1]'/>
10%
</div>
</div>
<div>
    <div className='flex gap-[40px]'>
        <div className='mx-[12px] '>
<Image src={Ellipse19}/>
<p className='whitespace-nowrap'>Mark Doe</p>
</div>
<div>
    <div className='flex'>
<IoIosStar className="text-[#EAB308]"/>
<p>5
Reviewed on 22nd March, 2024</p>

</div>
<p>I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.</p>
</div>
</div>
</div>
<div></div>

</div>
        </div>
        <div className='mx-[80px] mt-[80px] '>
            <p className='font-bold mb-[24px]'  >What Our Customer Say About Us</p>
            <Testimonial/>
        </div>
        <div className='mx-[80px] my-[80px] '>
            <p className='font-bold mb-[24px]'  >More Course Like that</p>
            <Courses/>
        </div>
        <Footer/>
        </>
    );
};

export default Course;