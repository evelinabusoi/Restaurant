import React from "react";

const MenuItem = (props) => {
  return (
    <div className='w-full my-2 mx-0 flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex-1'>
          <p
            className='font-base text-[#DCCA87] font-semibold tracking-wider 
          capitalize leading-[29.9px] text-[23px]'>
            {props.title}
          </p>
        </div>
        <div className='w-[90px] h-[1px] bg-[#DCCA87] my-0 mx-2' />
        <div className='flex justify-end items-end'>
          <p
            className='font-base text-white font-semibold tracking-wider 
          capitalize leading-[29.9px] text-[23px]'>
            {props.price}
          </p>
        </div>
      </div>
      <div className='w-full mt-1'>
        <p
          className='font-alt text-[#AAAAAA] font-normal tracking-wider
         capitalize leading-7 text-base'>
          {props.tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
