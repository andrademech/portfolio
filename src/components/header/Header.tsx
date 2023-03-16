import "./header.css";
import { CTA } from "./CTA";
import ME from "../../assets/me-about.jpg";

import { HeaderSocials } from "./HeaderSocials";

export function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Herberth Andrade</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <a href="#contact" className="srcoll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
