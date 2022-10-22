import React from 'react';
import CV from '../../assets/cv-ev.pdf';
import CVP from '../../assets/cv-pt.pdf';

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV <br /> <small>(English Version)</small>
      </a>
      <a href={CVP} download className="btn">
        Download CV
        <br /> <small>(Portuguese Version)</small>
      </a>
      <div className="btn">
        <a href="#contact">Lets talk!</a>
      </div>
    </div>
  );
}

export default CTA;
