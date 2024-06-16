import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import course1 from  '/public/course1.png'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CourseCard from './CourseCard';
import { Course } from '../types/course.type';

const Courses = () => {
  interface CourseCardProps {
    id: number | null | undefined;
    course: Course;
}
   async function getCourse(){
    type User = {
      id: number;
      name: string;
      email: string;
    };
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/course/all`);
  const users = (await res.data) ;
  return users;
  }

    const { data } = useQuery({
    queryKey: ['initial-users'],
    queryFn: () => getCourse(),

    staleTime: 5 * 1000,
  });
    return (
        <div>
      <div className="flex justify-between gap-[24px]">
      <div className="grid grid-cols-3 gap-4 p-4">
            {data?.length&&data.map((course:CourseCardProps) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>


</div>      
        </div>
    );
};

export default Courses;