import React from "react";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className='py-8 lg:px-16 border-[1px] border-solid border-[#DCCA87] bg-black sm:px-0 sm:border-none md:border-none md:w-full sm:w-full xl:w-auto'>
    <div className='text-center flex-1 w-full flex justify-center items-center flex-col'>
      <SubHeading title='Newsletter' />
      <h1 className='font-base px-8 text-[#DCCA87] text-[64px] leading-[83.2px] tracking-wider capitalize sm:text-[45px] sm:leading-[70px]'>
        Subscribe To Our Newsletter
      </h1>
      <p
        className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
        And never miss latest Updates!
      </p>
    </div>
    <div className='flex justify-center items-center lg:flex-row mt-12 sm:flex-col sm:mb-8 sm:mx-0 sm:px-4 sm:mt-0 sm:w-full'>
      <input
        type='email'
        placeholder='Enter your email address'
        className='sm:w-full m-4 w-[620px] border-[1px] border-solid border-[#DCCA87] rounded text-base font-base text-white py-3 px-4 bg-black 2xl:text-[32px]'
      />
      <button
        type='button'
        className='w-max bg-[#F5EFDB] text-black font-base font-bold tracking-wider leading-7 
          text-base py-2 px-6 mx-6 rounded-sm border-none outline-none cursor-pointer '>
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
