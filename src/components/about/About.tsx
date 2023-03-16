import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useState } from 'react'

export function About() {
  const [readMore, setRead] = useState(false)
  const revertRead = readMore ? 'about__description' : 'about__description__2'

  const [readLess, setReadLess] = useState(false)
  const revertLess = readLess ? 'Read More' : 'Read Less'

  const handleClick = () => {
    setRead((readMore) => !readMore)
    setReadLess((readLess) => !readLess)
  }

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year studying</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Loading...</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <div className={revertRead}>
            <p>
              I am a professional with a thirst for knowledge and constant
              technical and personal evolution. I love reading about personal
              development and applying what I've learned. Currently, I work in
              the electricity sector in the area of occupational safety.
            </p>
            <p>
              I am a musician, mechanical engineer, and occupational safety
              engineer. I am pursuing a postgraduate degree in software
              engineering and studying programming with a focus on React and its
              ecosystem.
            </p>
            <p>
              I work as a Front End freelancer at 7x Technology, improving
              on-demand systems, updating existing features, fixing small Front
              End bugs, and styling with Styled Components. The project's Front
              End is built in React.Js and the Back End in .NET.
            </p>
            <p>
              I am constantly updating and improving my skills, learning from
              Rocketseat's Ignite, which teaches the main skills needed to work
              with React, React Native, and Node. My main goal for 2023 is to
              become a FullStack developer, with a focus on React in the Front
              End and Node in the Back End. I can communicate in English with a
              good level of conversation, reading comprehension, and writing
              (which facilitates my learning and consulting official
              documentation); and I understand the basics of French (debutant).
            </p>
          </div>
          <div className="separator">
            <div>
              <button className="button__readmore" onClick={handleClick}>
                {revertLess}
              </button>
            </div>

            <a href="#contact" className="btn btn-primary">
              Lets Talk? :D
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
