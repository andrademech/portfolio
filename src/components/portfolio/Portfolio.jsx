import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// DO NOT USE THE IMGESIN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Orion UI kit for Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19609374-Orion-UI-kit-for-Figma',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19609442-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sankey Chart / Orion UI Kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19660633-Sankey-Chart-Orion-UI-Kit',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Chart components',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19551493-Chart-components',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Data visualization on the map',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19314530-Data-visualization-on-the-map',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Visualization of global data on the interactive map',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19314386-Visualization-of-global-data-on-the-interactive-map',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="porfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
