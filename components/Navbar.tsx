import React from 'react';
import Button from './Home/Button';
import Searchbar from './Searchbar';
import Image from 'next/image';
import logo2 from  '../public/logo2.png'

const Navbar = () => {
    return (
       <>
       <div className="flex justify-between items-center content-center px-[10px]">

<div className="flex justify-between items-center">
<Image src={logo2} className=""/>

<p>Learnhub</p>
</div>
<div className="">
<Searchbar placeholder="Search Your course"/>

</div>
<p>Catagories</p>
<Button label="Login" classNames="h-[40px]"/>
</div></>
    );
};

export default Navbar;