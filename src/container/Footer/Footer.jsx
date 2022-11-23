import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

import { images } from "../../constants";

const Footer = () => (
  <div className='w-full relative z-10 flex justify-start items-center flex-col bg-black pt-0'>
    <FooterOverlay />
    <Newsletter />

    <div className='w-full flex justify-between items-start mt-20 py-0 px-8 sm:flex-col xl:flex-row sm:items-center'>
      <div className='flex-1 m-4 text-center sm:my-8 sm:mx-0 w-full'>
        <h1
          className='font-base text-white font-normal tracking-wider capitalize
         text-[32px] leading-[41.6px] mb-4'>
          Contact Us
        </h1>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
          9 W 53rd St, New York, NY 10019, USA
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
          +1 212-344-1230
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
          +1 212-555-1230
        </p>
      </div>
      <div className='flex-1 m-4 text-center flex justify-center flex-col items-center sm:my-8 sm:mx-0 w-full'>
        <img
          src={images.gericht}
          alt='footer_logo'
          className='w-[210px] mb-3'
        />
        <p
          className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
          "The best way to find tourself is to lose yourself in the service of
          others"
        </p>
        <img src={images.spoon} className='w-[45px] mt-4' />
        <div className='mt-2 flex flex-row justify-center items-center'>
          <FiFacebook className='text-white m-2 text-[24px] cursor-pointer hover:text-[#DCCA87]' />
          <FiTwitter className='text-white m-2 text-[24px] cursor-pointer hover:text-[#DCCA87]' />
          <FiInstagram className='text-white m-2 text-[24px] cursor-pointer hover:text-[#DCCA87]' />
        </div>
      </div>

      <div className='flex-1 m-4 text-center sm:my-8 sm:mx-0 w-full'>
        <h1
          className='font-base text-white font-normal tracking-wider capitalize 
        text-[32px] leading-[41.6px] mb-4'>
          Working Hours
        </h1>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
          Monday-Friday:
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
          08:00 am - 12:00 am
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
          Saturday-Sunday:
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
          07:00 am - 11:00 pm
        </p>
      </div>
    </div>

    <div className='mt-12'>
      <p
        className='font-alt text-white font-normal tracking-wider leading-7
          capitalize text-[16px] sm:text-[12px]'>
        2021 Gericht. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
