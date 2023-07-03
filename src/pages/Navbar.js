import {Link} from 'react-router-dom';
import piz from '../assests/piz.png';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx';



export const Navbar = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return(
      <nav class='flex justify-evenly rounded-br-[50px]   shadow-md w-full fixed top-0 left-0 bg-[#F6FA70] h-16'>
        <div class='flex'>
          <h1 class=' items-center text-[30px] mt-3 font-bold'>PizzaMania</h1>
          <img class='h-[50px] mt-1' src={piz} alt="logo"/>
        </div>
        <div onClick={toggle} class='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
         {isOpen ?<RxCross2/>:<GiHamburgerMenu /> }
      </div>
        <div class={`flex gap-40  md:flex-row md:items-center md:pb-0 pb-1 absolute md:static bg-white  left-0 w-full md:w-auto md:pl-0 pl-5   sm:bg-[#F6FA70]  ${isOpen ? 'top-12' : 'top-[-490px] '}`}>
       <ul class='flex gap-10 text-[25px] '>
        <Link to='/'><li>Home</li></Link>
        <Link to='/menu'><li>Menu</li></Link>
        <Link to='/about'><li>About</li></Link>   
          </ul>
       
        <button class='text-[25px] bg-[#57D131] text-[white] py-1 px-4 rounded-full'>Login/Signup</button>
      
        </div>
    </nav>
   
    );
};
  