// components/CourseCard.js
"use client"
import React from 'react';
import Image from 'next/image';
import { IoIosStar } from 'react-icons/io';
import Link from 'next/link';

const CourseCard = ({ course }) => {
    return (
        <Link
  href={{
    pathname: "/course",
    query: {id: course.id},
  }}
>


        <div className="flex justify-between p-4 box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white">
            <div className="flex flex-col gap-[6px]">
                <Image src={course.photo} alt={course.title} width={300} height={200} className="rounded-[16px]" />
                <p className="font-bold">{course.title}</p>
                <p>By {course.instructor}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {[...Array(course.rating)].map((_, index) => (
                            <IoIosStar key={index} className="text-[#EAB308]" />
                        ))}
                        <p className="ml-2">{course.reviews} Reviews</p>
                    </div>
                </div>
                <p>{course.duration}. {course.lectures} Lectures. {course.level}</p>
                <p className="font-bold">${course.price}</p>
            </div>
        </div>
        </Link>
    );
};

export default CourseCard;
