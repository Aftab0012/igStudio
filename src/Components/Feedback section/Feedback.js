import React from 'react';

const Feedback = () => {
  return (
    <div className="px-44 bg-[#1d1d1d] pt-20">
      <div className="text-[54px] font-semibold leading-[78px] text-white pb-20">
        What says our <br /> happy Clients
      </div>
      <section className="flex flex-row text-white gap-x-14">
        <div className="border-[2px] hover:bg-[#2e2e2e] hover-effect rounded-2xl flex flex-col justify-center p-6 border-[#343434] w-[359px] h-[358px]">
          <div className="">
            <img
              className="w-[105px] h-[102px]"
              src={process.env.PUBLIC_URL + '/Jane_Cooper.png'}
              alt="gift"
            />
          </div>
          <h3 className="text-[24px] font-semibold pt-5">Eren Yeager</h3>
          <p className="text-[14px] pt-2">Ceo of Rumbling</p>
          <p className="text-[14px] text-[#656565] leading-6 pt-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className="border-[2px] hover:bg-[#2e2e2e] hover-effect rounded-2xl flex flex-col justify-center p-6 border-[#343434] w-[359px] h-[358px]">
          <div className="">
            <img
              className="w-[105px] h-[102px]"
              src={process.env.PUBLIC_URL + '/Devon_Lane.png'}
              alt="gift"
            />
          </div>
          <h3 className="text-[24px] font-semibold pt-5">Cid Kagenou</h3>
          <p className="text-[14px] pt-2">Ceo of Shadow Garden</p>
          <p className="text-[14px] text-[#656565] leading-6 pt-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className="border-[2px] hover:bg-[#2e2e2e] rounded-2xl hover-effect flex flex-col justify-center p-6 border-[#343434] w-[359px] h-[358px]">
          <div className="">
            <img
              className="w-[105px] h-[102px]"
              src={process.env.PUBLIC_URL + '/Robert_Fox.png'}
              alt="gift"
            />
          </div>
          <h3 className="text-[24px] font-semibold pt-5">Toji Fushiguro</h3>
          <p className="text-[14px] pt-2">Ceo of Zenin Clan</p>
          <p className="text-[14px] text-[#656565] leading-6 pt-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
