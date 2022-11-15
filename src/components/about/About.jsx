import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useState } from 'react';

const About = () => {
  const [readMore, setRead] = useState(false);
  const revertRead = readMore ? 'about__description' : 'about__description__2';

  const [readLess, setReadLess] = useState(false);
  const revertLess = readLess ? 'Read More' : 'Read Less';

  const handleClick = () => {
    setRead((readMore) => !readMore);
    setReadLess((readLess) => !readLess);
  };

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

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
              Sou um profissional com sede de conhecimento e constante evolução
              técnica e pessoal. Adoro ler sobre desenvolvimento pessoal e
              aplicar o que aprendi. Atualmente trabalho no setor elétrico na
              área de segurança do trabalho.
            </p>
            <p>
              Sou músico, engenheiro mecânico e engenheiro de segurança do
              trabalho. Faço uma pós em engenharia de software e estudo
              programação com foco em React e seu ecossistema.
            </p>
            <p>
              Atualmente estou em um projeto com mais 3 amigos, construindo um
              aplicativo para solução de mobilidade urbana utilizando React
              Native. O projeto está na fase inicial, com início previsto para
              fevereiro de 2023 aqui em João Pessoa.
            </p>
            <p>
              Atualmente estou estudando por conta própria, seguindo cursos na
              Udemy de React Hooks e React Native. Meu objetivo principal para
              2023 é me tornar um desenvolvedor FullStack, com foco em React no
              Front End e em .NET no Back End. Os estudos e aplicações em .NET
              irão iniciar em breve. Posso me comunicar em inglês com um bom
              nível de conversação, compreensão de leitura e escrita (o que
              falicita meu aprendizado e consulta em documentação oficial); e
              entendo o básico de francês (debutant).
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
  );
};

export default About;
