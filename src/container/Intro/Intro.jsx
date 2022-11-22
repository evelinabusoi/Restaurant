import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  return (
    <div className='h-screen relative'>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
        className='w-full h-full object-cover'
      />
      <div className='flex justify-center items-center absolute inset-0 bg-[#000000] opacity-60'>
        <div
          className='flex justify-center items-center w-[100px] h-[100px] 
          rounded-full border-[1px] border-solid border-[#DCCA87]'
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}>
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
