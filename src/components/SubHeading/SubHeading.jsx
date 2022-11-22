import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div className='mb-4'>
    <p
      className='font-base text-white font-bold tracking-wider 
          capitalize leading-[29.9px] text-[23px]'>
      {title}
    </p>
    <img src={images.spoon} alt='spoon' className='w-[45px] 2xl:w-[80px]' />
  </div>
);

export default SubHeading;
