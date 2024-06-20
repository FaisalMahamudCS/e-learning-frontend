"use client"
import React from 'react';
import Button from './Home/Button';
import Searchbar from './Searchbar';
import Image from 'next/image';
import logo2 from  '../public/logo2.png'
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Link from 'next/link';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const router=useRouter()
    const [user] = useAuthState(auth);

    const onClick=()=>{
        router.push('/signup')
    }
    const loginClick=()=>{
        router.push('/login')
    }
    const logout = () => {
        signOut(auth);
    };
    return (
       <>
       <div className="flex justify-between items-center content-center px-[10px]">

<div className="flex justify-between items-center">
<Image src={logo2} className="" alt='Image' />

<p>SkillAmplify</p>
</div>
<div className="">
<Searchbar placeholder="Search Your course"/>

</div>
<p>Catagories</p>
{/* <li>{user ? <><button className="btn btn-ghost" onClick={logout} >Logout</button><Link to='/'> {user.displayName}</Link>   <Link to='/dashboard'>DashBoard</Link></>  :<><Link to="/login">Login</Link></> }</li> */}
<>
{
user?<> <Link href='/'>{user?.displayName}</Link>
<Button label="Logout" classNames="h-[40px]" onClick={logout}/>
</>
:
<>
<Button label="Login" onClick={loginClick} classNames="h-[40px]"/>
<Button label="Sign Up" classNames="h-[40px]" onClick={onClick}/>
</>
}
</>

</div></>
    );
};

export default Navbar;