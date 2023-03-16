import './footer.css'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

export function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        HERBERTH ANDRADE
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/herberth-andrade-759b10127/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Herberth Andrade. All rights reserved.</small>
      </div>
    </footer>
  )
}
