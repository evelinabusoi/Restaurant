import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center sm:p-4 py-4 px-8 bg-black'>
      <div className='flex justify-start items-center'>
        <img
          src={images.gericht}
          alt='app logo'
          className='sm:w-[110px] w-[150px] 2xl:w-[210px]'
        />
      </div>
      <ul className='sm:hidden flex flex-1 justify-center items-center text-white'>
        <li className='sm:hidden lg:flex font-sans mx-4 hover:text-[#545454]'>
          <a href='#home'>Home</a>
        </li>
        <li className='sm:hidden lg:flex font-sans mx-4 hover:text-[#545454]'>
          <a href='#about'>About</a>
        </li>
        <li className='sm:hidden lg:flex font-sans mx-4 hover:text-[#545454]'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='sm:hidden lg:flex font-sans mx-4 hover:text-[#545454]'>
          <a href='#awards'>Awards</a>
        </li>
        <li className='sm:hidden lg:flex font-sans mx-4 hover:text-[#545454]'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='flex justify-end items-center'>
        <a
          href='#login'
          className='mx-4 my-0 text-right  text-white hover:border-b-[1px] hover:border-solid hover:border-[#DCCA87]'>
          Log In / Register
        </a>
        <div className='w-[1px] h-[30px] bg-[#545454]' />
        <a
          href='/'
          className='mx-4 text-white hover:border-b-[1px] hover:border-solid hover:border-[#DCCA87]'>
          Book Table
        </a>
      </div>
      <div className='sm:flex hidden'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='fixed top-0 left-0 w-full h-full bg-black transition ease-in duration-500 flex-col z-50'>
            <MdOutlineRestaurantMenu
              fontSize={27}
              color='#DCCA87'
              className='cursor-pointer absolute top-5 right-5 '
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className='flex flex-1 flex-col justify-center items-center text-white'>
              <li className='m-8 cursor-pointer text-[#DCCA87] text-[2rem] text-center font-base hover:text-white'>
                <a href='#home'>Home</a>
              </li>
              <li className='m-8 cursor-pointer text-[#DCCA87] text-[2rem] text-center font-base hover:text-white'>
                <a href='#about'>About</a>
              </li>
              <li className='m-8 cursor-pointer text-[#DCCA87] text-[2rem] text-center font-base hover:text-white'>
                <a href='#menu'>Menu</a>
              </li>
              <li className='m-8 cursor-pointer text-[#DCCA87] text-[2rem] text-center font-base hover:text-white'>
                <a href='#awards'>Awards</a>
              </li>
              <li className='m-8 cursor-pointer text-[#DCCA87] text-[2rem] text-center font-base hover:text-white'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
