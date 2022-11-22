import React from "react";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className='flex justify-center items-center relative py-16 px-8 bg-[url("./assets/bg.png")] bg-center bg-cover bg-repeat bg-fixed'
    id='about'>
    <div className='flex justify-center items-center absolute inset-0'>
      <img
        src={images.G}
        alt='g_letter'
        className='sm:w-4/5 sm:h-[320px] w-[391px] h-[415px] z-0'
      />
    </div>
    <div className='flex w-full justify-center items-center z-20 sm:flex-col '>
      <div className='flex-1 flex justify-end items-end flex-col text-right'>
        <h1 className='font-base text-[#DCCA87] text-[64px] leading-[83.2px] tracking-wider '>
          About us
        </h1>
        <img src={images.spoon} alt='about_spoon' className='w-11' />
        <p className='font-alt my-8 mx-0 text-gray-400 lg:my-16'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button
          type='button'
          className='bg-[#F5EFDB] text-black font-base font-bold tracking-wider leading-7 text-[16px] py-2 px-6 rounded-sm cursor-pointer border-none outline-none'>
          Know More
        </button>
      </div>
      <div className='sm:my-16 sm:mx-0 my-8 mx-16 flex justify-center items-center '>
        <img
          src={images.knife}
          alt='about_knife'
          className='lg:h-[1110px] h-[700px]'
        />
      </div>
      <div className='flex-1 flex justify-start items-start flex-col text-left'>
        <h1 className='font-base text-[#DCCA87] text-[64px] leading-[83.2px] tracking-wider '>
          Our History
        </h1>
        <img src={images.spoon} alt='about_spoon' className='w-11' />
        <p className='font-alt my-8 mx-0 text-gray-400 lg:my-16'>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button
          type='button'
          className='bg-[#F5EFDB] text-black font-base font-bold tracking-wider leading-7 text-[16px] py-2 px-6 rounded-sm cursor-pointer border-none outline-none'>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
