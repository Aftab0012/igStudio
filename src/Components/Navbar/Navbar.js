import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between py-12 text-white px-44">
      <img
        className="w-[143px] h-auto"
        src={process.env.PUBLIC_URL + '/brandlogo.png'}
        alt="brand-img"
      />
      <div className="flex gap-10 px-2 mt-4 font-medium text-[18px]">
        <div>Home</div>
        <div>Attorneys</div>
        <div>Practice Areas</div>
        <div>About Us</div>
      </div>
      <button className="px-6 text-xl border-[3px]">Contact Now</button>
    </div>
  );
};

export default Navbar;
