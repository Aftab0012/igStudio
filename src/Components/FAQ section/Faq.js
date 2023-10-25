import React from 'react';
import Accordion from '../Accordion/Accordion';

const Faq = () => {
  return (
    <div className="px-44 flex flex-row justify-around text-white bg-[#1d1d1d] pt-20">
      <div>
        <div className="text-[54px] font-semibold leading-[75px]">FAQ</div>
        <p className=" text-[18px] text-[#363636] font-medium leading[30px] font-sans">
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do
          amet sint.
        </p>
      </div>

      <div className="pt-10 w-[600px]">
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
