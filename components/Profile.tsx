"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
import profile4 from  '../public/profile4.png'
import Image from 'next/image';
import Courses from './Courses';
import Footer from './Footer';
import Review from './Review';
import ProfileEdit from './ProfileEdit';

const Profile = () => {
    const [selectedContent, setSelectedContent] = useState('profile');

    return (
        <div>
            <Navbar/>
            <div className="flex mx-20 gap-10 mb-5">
                <div>
                    <Image src={profile4} alt='profile4'/>
                    <p className='text-center'>John Doe</p>
                    <div></div>
                    <div className="w-1/4  p-4">
 <button onClick={() => setSelectedContent('profile')} className="  mb-4 p-2 ">Profile</button>

        <button onClick={() => setSelectedContent('review')} className=" w-full mb-4 p-2">Review</button>
        <button onClick={() => setSelectedContent('course')} className=" w-full p-2 ">Course</button>
      </div>
      <div className='w-3/4'>

      </div>
                </div>
                <div className='w-full'>
                    {
                        selectedContent=='course'&&
                        <>
                    <p>Course</p>
                    <Courses/>
                    </>
}
                    {
                        selectedContent=='review'&&
                        
                    <Review/>
}
{
  selectedContent=='profile'&&<ProfileEdit/>

}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Profile;