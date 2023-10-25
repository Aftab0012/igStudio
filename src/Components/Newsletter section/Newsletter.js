import React from 'react';

const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[40vh] bg-[#323232]">
      <div className="text-white pb-10 text-[55px] font-medium leading-[76px]">
        Subscribe Our Newsletter
      </div>
      <div className="flex gap-3 pb-10">
        <input
          className="p-3 w-[276px] h-[53px]"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="p-3 w-[276px] h-[53px]"
          type="text"
          placeholder="Enter your email"
        />
        <button className="w-[116px] h-[53px] bg-[#e0b547]">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
