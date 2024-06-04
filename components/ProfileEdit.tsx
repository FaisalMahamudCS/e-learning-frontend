import React, { useState } from 'react';
import InputComponent from './Input';
import LabelComponent from './Label';
import Button from './Home/Button';

const ProfileEdit = () => {
    const [inputValue, setInputValue] = useState('');

    return (
            <div className='w-full'>
    {/* <h2 className='text-center text-[32px] mt-[94px] font-bold'>Create your account</h2> */}
    <div className="flex flex-col mt-[22px] w-full">
        <LabelComponent text='Full  Name'/>
    <div className="flex justify-between  w-full gap-4  ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles ' placeholder='Enter First Name'/>
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    </div>
    </div>
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='User Name'/>
    <div className=" ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='User Name'/>
   
    </div>
    </div>
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='Email'/>
    <div className=" ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Email'/>
   
    </div>
    </div>
    <div className="flex flex-col mt-[22px]">
        <LabelComponent text='Full Name'/>
    <div className="flex justify-between gap-4  ">
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    <InputComponent  onChange={setInputValue} value={inputValue}  className='inputStyles' placeholder='Enter First Name'/>
    </div>
    </div>
    <Button label='Create Account' classNames='bg-[#020617] w-[183px] h-[51px] text-white mt-[22px]'/>
</div>
    );
};

export default ProfileEdit;