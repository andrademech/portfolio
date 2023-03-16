import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

// DO NOT USE THE IMGESIN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pomodoro Timer',
    github: 'https://github.com/andrademech/ignite-timer',
    deploy: 'https://ignite-timer-dun.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Clone Discord',
    github: 'https://github.com/andrademech/clone-discord',
    deploy: 'https://clone-discord-rose.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Blog Posts',
    github: 'https://github.com/andrademech/01-fundamentos-reactjs-ts',
    deploy: 'https://01-fundamentos-reactjs-ts-nine.vercel.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Todo list',
    github: 'https://github.com/andrademech/todo-list-ts',
    deploy: 'https://todo-list-ts-pi.vercel.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'DT Money - Finances App ',
    github: 'https://github.com/andrademech/03-dt-money',
    deploy: 'https://03-dt-money-eight.vercel.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Petshop - Pets List (Front-end)',
    github: 'https://github.com/andrademech/petshop-frontend',
    deploy: 'https://petshop-frontend.vercel.app/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Petshop - Pets List (Back-end)',
    github: 'https://github.com/andrademech/petshop-backend',
  },
  {
    id: 8,
    image: IMG8,
    title: 'Node API REST',
    github: 'https://github.com/andrademech/02-api-rest-nodejs',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Agenda - Contacts',
    github: 'https://github.com/andrademech/petshop-backend',
    deploy: 'https://projeto-agenda-seven.vercel.app/',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, deploy }) => {
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
                <a href={deploy} className="btn btn-primary" target="__blank">
                  Deploy
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
