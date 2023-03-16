import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/herberth-andrade-759b10127/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/andrademech" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  )
}
