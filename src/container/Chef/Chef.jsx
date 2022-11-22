import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";

const Chef = () => (
  <div
    className='flex sm:flex-col px-8 justify-start items-center min-h-screen py-16 
  bg-[url("./assets/bg.png")] bg-center bg-cover bg-repeat bg-fixed'>
    <div className='flex-1 w-full flex  items-center sm:mr-0 mr-8 justify-center'>
      <img src={images.chef} alt='chef_image' className='sm:w-full w-4/6' />
    </div>
    <div className='flex flex-1 flex-col w-full justify-center items-center sm:my-8'>
      <div className='flex flex-col w-full justify-start items-start p-0 '>
        <SubHeading title="Chef's word" />
        <h1
          className='font-base text-[#DCCA87] sm:text-[44px] text-[64px] leading-[83.2px]
      tracking-wider capitalize'>
          What we believe in
        </h1>
      </div>
      <div className='flex flex-col w-full mt-20'>
        <div className='flex justify-start items-end'>
          <img
            src={images.quote}
            alt='quote_image'
            className='w-[47px] h-[40px] mt-0 mr-4 mb-4 ml-0'
          />
          <p
            className='font-alt text-white font-normal italic tracking-wider
           capitalize leading-7 text-[16px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p
          className='font-alt text-white font-normal italic tracking-wider
           capitalize leading-7 text-[16px]'>
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className='w-full mt-12'>
        <p
          className='font-base font-light  leading-[41.6px] tracking-wider 
        capitalize text-[#DCCA87] text-[32px] '>
          Kevin Luo
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider
           capitalize leading-7 text-[16px]'>
          Chef & Founder
        </p>
        <img
          src={images.sign}
          alt='sign_image'
          className='sm:w-4/5 w-[250px] mt-12 2xl:w-[370px]'
        />
      </div>
    </div>
  </div>
);

export default Chef;
