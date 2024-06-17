import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import Ellipse19 from  '/public/Ellipse19.png'

const Reviews = ({CourseReview}) => {
    return (
        <div>
             <div className='flex gap-[40px]'>
        <div className='mx-[12px] '>
<Image src={Ellipse19}/>
<p className='whitespace-nowrap'>{CourseReview?.reviewedBy}</p>
</div>
<div>
    <div className='flex'>
<IoIosStar className="text-[#EAB308]"/>
<p className='pr-2'>{CourseReview?.rating}
</p>{'  '}
 <p>{CourseReview?.reviewDate}</p>

</div>
<p>{CourseReview?.reviewText}</p>
</div>
</div>
        </div>
    );
};

export default Reviews;