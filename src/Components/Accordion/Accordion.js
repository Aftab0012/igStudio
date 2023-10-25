import React from 'react';
import AccordionCard from './AccordionCard';
import { accordionData } from '../../utils/Content';

const Accordion = () => {
  return (
    <div className="">
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <AccordionCard key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
