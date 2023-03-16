import React from 'react'
import CV from '../../assets/cv-ev.pdf'
import CVP from '../../assets/cv-pt.pdf'

export function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV <br /> <small>(EN-US version)</small>
      </a>
      <a href={CVP} download className="btn">
        Download CV
        <br /> <small>(PT-BR version)</small>
      </a>
      <div className="lets__talk">
        <a href="#contact">Lets talk?</a>
      </div>
    </div>
  )
}
