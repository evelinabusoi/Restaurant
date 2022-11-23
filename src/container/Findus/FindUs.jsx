import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div
    className='flex justify-between items-center min-h-screen py-16 sm:px-8 px-16 sm:flex-col lg:flex-row
  bg-[url("./assets/bg.png")] bg-center bg-cover bg-repeat bg-fixed'
    id='contact'>
    <div className='flex-1 w-full flex justify-center items-start flex-col'>
      <SubHeading title='Contact' />
      <h1
        className='mb-12 font-base text-[#DCCA87] sm:text-[44px] text-[64px] leading-[83.2px]
      tracking-wider capitalize'>
        Find us
      </h1>
      <div className=''>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7 
        capitalize text-[16px] sm:text-[12px]'>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className='font-base text-[#DCCA87] my-8 mx-0 font-bold tracking-wider capitalize 
        leading-[29.9px] text-[23px] sm:text-[19px]'>
          Opening Hours
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7 
        capitalize text-[16px] sm:text-[12px]'>
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7 
        capitalize text-[16px] sm:text-[12px]'>
          Sat - Sun: 10:00 am - 03:00 am
        </p>
      </div>
      <button
        type='button'
        className='bg-[#F5EFDB] text-black font-base font-bold tracking-wider leading-7 
          text-base py-2 px-6 rounded-sm border-none outline-none cursor-pointer mt-8'>
        Visit Us
      </button>
    </div>
    <div className='flex-1 w-full flex justify-center items-center ml-8 sm:py-8'>
      <img src={images.findus} alt='findus_img' className='w-4/5' />
    </div>
  </div>
);

export default FindUs;
