import React from 'react';

const Intro = () => {
  return (
    <div className=" w-full h-[100%] bg-[#1d1d1d] pt-20 pl-[-7px]">
      <div className="flex text-white h-[206px] justify-center pl-[70px]">
        <div className="pr-32 leading-[80px] text-5xl font-medium pt-5">
          Lets's Introduce <br /> Ourself
        </div>
        <div className="bg-gray-500 w-[1px] h-auto"></div>
        <div className="pt-10 pl-20">
          <h2 className="text-3xl font-bold">Criminal Lawyer</h2>
          <p className="pt-8 text-lg text-[#505050] leading-6 whitespace-normal">
            Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor
            do amet sint.
            <br /> Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>

      <div className="text-5xl font-medium text-center text-white pt-28">
        Why Choose us?
      </div>

      <div className="flex flex-row items-center justify-center gap-6 pt-20">
        <div className="hover:bg-[#2e2e2e] hover-effect rounded-xl px-6 pb-10 pt-10 text-white border border-cyan-900 w-[377px] h-auto">
          <div className="bg-white rounded-full w-[101px] flex justify-center items-center h-[101px]">
            <img
              className="p-2 w-[62px] h-[62px] rounded-full"
              src={process.env.PUBLIC_URL + '/gift.svg'}
              alt="gift"
            />
          </div>
          <p className="leading-[24px] pt-10 text-[24px] font-semibold ">
            98% success Rate
          </p>
          <p className="font-medium text-[#616161] pt-10 text-[14px] leading-[23px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className="hover:bg-[#2e2e2e] hover-effect rounded-xl px-6 pb-10 pt-10 text-white border border-cyan-900 w-[377px] h-auto">
          <div className="bg-white rounded-full w-[101px] flex justify-center items-center h-[101px]">
            <img
              className="p-2 w-[62px] h-[62px] rounded-full"
              src={process.env.PUBLIC_URL + '/gift.svg'}
              alt="gift"
            />
          </div>
          <p className="leading-[24px] pt-10 text-[24px] font-semibold ">
            98% success Rate
          </p>
          <p className="font-medium text-[#616161] pt-10 text-[14px] leading-[23px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className="hover:bg-[#2e2e2e] hover-effect rounded-xl px-6 pb-10 pt-10 text-white border border-cyan-900 w-[377px] h-auto">
          <div className="bg-white rounded-full w-[101px] flex justify-center items-center h-[101px]">
            <img
              className="p-2 w-[62px] h-[62px] rounded-full"
              src={process.env.PUBLIC_URL + '/gift.svg'}
              alt="gift"
            />
          </div>
          <p className="leading-[24px] pt-10 text-[24px] font-semibold ">
            98% success Rate
          </p>
          <p className="font-medium text-[#616161] pt-10 text-[14px] leading-[23px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
