import React from "react";

const FooterOverlay = () => (
  <div className='w-full h-full -z-10 flex flex-col absolute'>
    <div className='h-1/4 bg-black' />
    <div className='h-3/4 bg-[url("./assets/bg.png")] bg-center bg-cover bg-repeat bg-fixed' />
  </div>
);

export default FooterOverlay;
