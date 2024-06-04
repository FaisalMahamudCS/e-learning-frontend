import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import Ellipse19 from  '/public/Ellipse19.png'
import StarRating from './StartRating';
import Heading from './Heading';

const Review = () => {
    return (
        <div>
             <div className='flex'> <p className='font-bold'>Reviews</p> <p className=' ml-1 font-bold'>(12)</p></div>
             <div className='flex gap-[40px] box-border border border-gray-200 rounded-lg p-4 mt-6 bg-white mr-[82px]'>
  
<div >
    <div className=''>
       <div className='flex'> <p>Course Name: </p><p className='font-bold'>Beginner’s Guide to Design</p></div>
           <div className='flex '>Rating:<StarRating /></div> 


</div>
<div className='flex gap-2'>
<div><p>Review:</p></div> 
<div> <p>I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding</p></div></div>
</div>
</div>  
        </div>
    );
};

export default Review;