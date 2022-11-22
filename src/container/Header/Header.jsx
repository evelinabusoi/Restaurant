import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";

const Header = () => (
  <div
    className='bg-black flex justify-between items-center sm:py-16 sm:px-8 py-16 px-24 md:flex-col'
    id='home'>
    <div className='flex-1 w-full flex justify-centeritems-start flex-col text-white'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='font-base text-[#DCCA87] tracking-wider uppercase leading-[117px] text-[90px]'>
        The key to fine dining
      </h1>
      <p className='my-8 mx-0 '>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
    </div>
    <div className=' flex-1 w-4/5 flex justify-center items-center ml-8'>
      <img src={images.welcome} alt='header img' className='w-4/5 mt-20' />
    </div>
  </div>
);

export default Header;
