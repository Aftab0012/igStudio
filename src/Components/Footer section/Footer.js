import React from 'react';

const Footer = () => {
  return (
    <div className="h-[40vh] max-w-full">
      <div className="flex pt-24 justify-evenly">
        <div>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="brand-logo" />
        </div>
        <div className="flex text-[16px] font-normal justify-around gap-8 text-white">
          <div className="">Home</div>
          <div className="">Attorneys</div>
          <div className="">Practice Area</div>
          <div className="">About Us</div>
        </div>
        <div className="flex gap-5">
          <img
            className="w-[30px] h-[30px]"
            src={process.env.PUBLIC_URL + '/facebook.svg'}
            alt="facebook"
          />
          <img
            className="w-[30px] h-[30px]"
            src={process.env.PUBLIC_URL + '/twitter.svg'}
            alt="twitter"
          />
          <img
            className="w-[30px] h-[30px]"
            src={process.env.PUBLIC_URL + '/pinterest.svg'}
            alt="linkedin"
          />
          <img
            className="w-[30px] h-[30px]"
            src={process.env.PUBLIC_URL + '/instagram.svg'}
            alt="instagram"
          />
        </div>
      </div>
      <div className="flex text-[14px] justify-center gap-8 pt-20 text-[#3d3c3c]">
        <p>© 2020 Acme.</p> <p>All right reserved.</p>
        <p>Privacy Policy. Terms of Service.</p>
      </div>
    </div>
  );
};

export default Footer;
