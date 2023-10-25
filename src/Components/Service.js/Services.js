import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col gap-5 pt-20 px-52 bg-[#1d1d1d]">
      <div className="flex gap-3 rounded-xl">
        <div className="w-[750px] h-[342px] rounded-xl relative">
          <img
            className="object-cover w-full h-full hover-shadow"
            src={process.env.PUBLIC_URL + '/BusinessLaw.png'}
            alt="business-png"
          />
          <div className="absolute bottom-10 z-50 text-[24px] font-semibold text-white left-[40%]">
            BUSINESS LAW
          </div>
        </div>
        <div className="w-[358px] h-[342px] rounded-xl relative">
          <img
            className="object-cover w-full h-full hover-shadow rounded-xl"
            src={process.env.PUBLIC_URL + '/BusinessLaw1.png'}
            alt="business-png"
          />
          <div className="absolute bottom-10 z-50 text-[24px] font-semibold text-white left-[20%]">
            PARTNERSHIP LAW
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-[358px] h-[342px] rounded-xl relative">
          <img
            className="object-cover w-full h-full hover-shadow"
            src={process.env.PUBLIC_URL + '/Elder_Abuse.png'}
            alt="business-png"
          />
          <div className="absolute bottom-10 z-50 text-[24px] font-semibold text-white left-[27%]">
            REAL ESTATE LAW
          </div>
        </div>
        <div className="w-[750px] h-[342px] rounded-xl relative">
          <img
            className="object-cover w-full h-full hover-shadow"
            src={process.env.PUBLIC_URL + '/LandLord_Disputes.png'}
            alt="landlord"
          />
          <div className="absolute bottom-10 z-50 text-[24px] font-semibold text-white left-[38%]">
            BUSINESS LAW
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-[750px] h-[342px] rounded-xl relative">
          <img
            className="object-cover w-full h-full rounded-lg hover-shadow"
            src={process.env.PUBLIC_URL + '/PartnershipLAW.png'}
            alt="dispute-png"
          />
          <div className="absolute bottom-10 z-50 text-[24px] font-semibold text-white left-[35%]">
            ELDER ABUSE LAW
          </div>
        </div>
        <div className="w-[358px] h-[342px] rounded-xl relative">
          <img
            className="object-cover w-full h-full hover-shadow"
            src={process.env.PUBLIC_URL + '/RealEstateLaw.png'}
            alt="dispute-png"
          />
          <div className="absolute bottom-10 z-50 text-[24px] font-semibold text-white left-[27%]">
            BUSINESS LAW
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
