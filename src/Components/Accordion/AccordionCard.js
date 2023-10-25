import React, { useState } from 'react';

const AccordionCard = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="py-3 border-b-[3px] border-[#282828] accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="font-medium">{title}</div>
        <div className="bg-[#e3b748] px-[8.5px] h-7 w-7 flex text-center text-black font-bold justify-center rounded-full items-center">
          {isActive ? '-' : '+'}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionCard;
