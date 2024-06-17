import React from 'react';
import { LessonAttributes } from '../types/lesson.type';
interface LessonAttribute{
    lesson:LessonAttributes
}

const Lesson = ({lesson}:LessonAttribute) => {
    return (
        <div className='flex w-1/2  border-b border-[#e2e8f0]'>
        <div>

        </div>
    <div className='py-[24px] flex justify-between  gap-[300px] '>
        <div >
        <p>{lesson?.title}</p>
        </div>
        <div className='flex justify-between gap-3'>
        <p className=''>{lesson?.lessons} Lesson</p>
        <p>{lesson?.duration} </p> 
        </div>
    </div>
    </div>
    );
};

export default Lesson;