import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div
      className='flex-1 flex justify-start items-start min-w-[230px] m-8
     sm:min-w-full sm:my-4 sm:mx-0'>
      <img src={imgUrl} alt='awards' className='sm:w-[50px] sm:h-[50px]' />
      <div className='flex flex-col ml-4'>
        <p
          className='font-base text-[#DCCA87] font-bold tracking-wider 
      capitalize leading-[29.9px] text-[23px]'>
          {title}
        </p>
        <p
          className='font-alt text-white font-normal tracking-wider
       capitalize leading-7 text-[16px]'>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div
    className='flex justify-center items-center relative py-16 px-8 sm:flex-col md:flex-col
    bg-[url("./assets/bg.png")] bg-center bg-cover bg-repeat bg-fixed'
    id='awards'>
    <div className='flex-1 w-full flex justify-center items-start flex-col'>
      <SubHeading title='Awards & recognition' />
      <h1 className='font-base text-[#DCCA87] text-[64px] leading-[83.2px] tracking-wider '>
        Our Laurels
      </h1>
      <div className='flex justify-start items-center flex-wrap mt-12'>
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className='flex-1 w-full flex items-center sm:mr-0 sm:mt-8 mr-8 ml-8 justify-center '>
      <img src={images.laurels} alt='laurels_img' className='sm:w-full w-4/6' />
    </div>
  </div>
);

export default Laurels;
