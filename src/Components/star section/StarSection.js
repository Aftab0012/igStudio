import React from 'react';

const StarSection = () => {
  return (
    <div className="flex justify-between pt-14 h-[100vh] px-44">
      <div className="w-[571px] h-auto">
        <div className="text-[66px] pb-10 text-white leading-[97px]">
          <div className="font-normal ">You dont't have to</div>
          <div className="font-medium">Fight Them Alone.</div>
        </div>
        <div>
          <p className="leading-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            <br />
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor{' '}
            <br />
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className="flex items-center pt-12">
          <input
            className="w-[508px] h-[74px] text-white text-[14px] rounded-[43px] p-10 bg-[#292929] opacity-[0.1px]"
            type="text"
            placeholder="Enter your email address"
          />
          <div className="bg-yellow-500 cursor-pointer text-black text-2xl font-medium p-4 rounded-[43px] ml-[-135px]">
            Let's Talk
          </div>
        </div>
      </div>
      <div className="mt-[-20px]">
        <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="logo" />
      </div>
    </div>
  );
};

export default StarSection;
