import React, { useRef } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div
      className='flex justify-center items-center xl:flex-row bg-black
    pt-16 pr-0 pb-16 pl-24 sm:pl-8 md:pl-8 sm:flex-col'>
      <div
        className='flex-1 flex justify-center items-start flex-col 
      xl:min-w-[500px] 2xl:pr-8 sm:min-w-full '>
        <SubHeading title='Instagram' />
        <h1 className='font-base text-[#DCCA87] text-[64px] sm:text-5xl leading-[83.2px] tracking-wider'>
          Photo Gallery
        </h1>
        <p
          className='first-letter:font-alt text-[#AAAAAA] font-normal tracking-wider
           capitalize leading-7 text-[16px] sm:text-sm mt-8 mr-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button
          type='button'
          className='bg-[#F5EFDB] text-black font-base font-bold tracking-wider leading-7
           text-[16px] mt-8 my-4 py-2 px-6 rounded-[1px] border-none outline-none cursor-pointer '>
          View More
        </button>
      </div>
      <div className='flex-1 flex flex-row max-w-1/2 relative sm:max-w-full sm:my-20 sm:mx-0 '>
        <div
          className='flex flex-row w-max overflow-x-scroll scrollbar-hide sm:min-w-240px sm:h-[320px]'
          ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className='relative min-w-301px h-[447px] mr-8 sm:min-w-240px sm:h-[320px] flex justify-center items-center'
              key={`gallery_image-${index + 1}`}>
              <img
                src={image}
                alt='gallery_image'
                className='w-full h-full object-cover opacity-100 
                hover:opacity-40 ease-in-out duration-500'
              />
              <BsInstagram
                className='absolute text-white text-[32px] opacity-50 
              ease-in-out duration-500 cursor-pointer hover:opacity-100'
              />
            </div>
          ))}
        </div>
        <div
          className='w-full flex justify-between items-center py-0 px-4 absolute bottom-1
        '>
          <BsArrowLeftShort
            className='text-[#DCCA87] text-[2rem] cursor-pointer bg-black 
            rounded-[5px] hover:text-white'
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className='text-[#DCCA87] text-[2rem] cursor-pointer bg-black 
            rounded-[5px] hover:text-white'
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
