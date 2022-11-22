import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

const SpecialMenu = () => {
  return (
    <div
      className='flex-col py-16 px-8 2xl:px-24 flex justify-center items-center bg-black'
      id='menu'>
      <div className='mb-8 text-center flex flex-col justify-center items-center'>
        <SubHeading title='Menu That Fits You Palatte' className='text-white' />
        <h1 className='sm:text-[45px] sm:leading-[70px] font-base text-[#DCCA87] text-[64px] leading-[83.2px] tracking-wider capitalize'>
          Today's Special
        </h1>
      </div>
      <div
        className='w-full my-8 mx-0 flex sm:items-center
      sm:flex-col justify-center 2xl:items-start 2xl:flex-row'>
        <div className='flex flex-1 w-full flex-col justify-center items-center'>
          <p
            className='font-base font-semibold sm:text-[35px] text-[45px] 
          leading-[48.5px] md:leading-[58.5px] tracking-wider text-white'>
            Wine & Beer
          </p>
          <div className='flex flex-col my-8 mx-0 w-full'>
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className='w-[410px] my-0 mx-8 sm:w-full lg:my-12 md:w-[650px] '>
          <img src={images.menu} alt='menu__img' className='w-full h-auto' />
        </div>
        <div className='flex flex-1 w-full flex-col justify-center items-center'>
          <p
            className='sm:mt-16 font-base font-semibold sm:text-[35px] text-[45px]  
          leading-[48.5px] md:leading-[58.5px] tracking-wider text-white'>
            Cocktails
          </p>
          <div className='flex flex-col my-8 mx-0 w-full'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <button
          type='button'
          className='bg-[#F5EFDB] text-black font-base font-bold tracking-wider leading-7 
          text-base py-2 px-6 rounded-sm border-none outline-none cursor-pointer'>
          View More
        </button>
      </div>
    </div>
  );
};
export default SpecialMenu;
