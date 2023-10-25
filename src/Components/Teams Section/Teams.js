import React from 'react';

const Teams = () => {
  return (
    <div className="pt-20 bg-[#1d1d1d] flex flex-col justify-center items-center">
      <div className="text-[54px] text-white font-semibold">Our Team</div>
      <div className="flex flex-row pt-16 pb-16 gap-14">
        <div className="flex rounded-2xl p-2 w-[344px] h-[109px] hover-effect hover:bg-[#e3b748]">
          <img
            src={process.env.PUBLIC_URL + '/Sanfole.png'}
            alt="unique-identity"
          />
          <div className="pl-10">
            <h2 className="text-white text-[24px] font-medium">Daniel Def</h2>
            <p className="text-[#3e3e3e]">301 Cases</p>
          </div>
        </div>
        <div className="flex rounded-2xl p-2 w-[344px] h-[109px] hover-effect hover:bg-[#e3b748]">
          <img
            src={process.env.PUBLIC_URL + '/Cesforila.png'}
            alt="unique-identity"
          />
          <div className="pl-10">
            <h2 className="text-white text-[24px] font-medium">Sanfole</h2>
            <p className="text-[#3e3e3e]">850 Cases</p>
          </div>
        </div>
        <div className="flex rounded-2xl p-2 w-[344px] h-[109px] hover-effect hover:bg-[#e3b748]">
          <img
            src={process.env.PUBLIC_URL + '/Colleen.png'}
            alt="unique-identity"
          />
          <div className="pl-10">
            <h2 className="text-white text-[24px] font-medium">Cesforila</h2>
            <p className="text-[#3e3e3e]">470 Cases</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-14">
        <div className="flex rounded-2xl w-[344px] h-[109px] p-2 hover effedt hover:bg-[#e3b748]">
          <img
            src={process.env.PUBLIC_URL + '/Haldone.png'}
            alt="unique-identity"
          />
          <div className="pl-10">
            <h2 className="text-white text-[24px] font-medium">Collen</h2>
            <p className="text-[#3e3e3e]">180 Cases</p>
          </div>
        </div>
        <div className="flex rounded-2xl w-[344px] h-[109px] p-2 hover-effect hover:bg-[#e3b748]">
          <img
            src={process.env.PUBLIC_URL + '/Danial.png'}
            alt="unique-identity"
          />
          <div className="pl-10">
            <h2 className="text-white text-[24px] font-medium">Haldone</h2>
            <p className="text-[#3e3e3e]">212 Cases</p>
          </div>
        </div>
        <div className="flex rounded-2xl w-[344px] h-[109px] hover-effect hover:bg-[#e3b748] p-2">
          <img
            src={process.env.PUBLIC_URL + '/Nik.png'}
            alt="unique-identity"
          />
          <div className="pl-10">
            <h2 className="text-white text-[24px] font-medium">Nik Jeo</h2>
            <p className="text-[#3e3e3e]">850 Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
