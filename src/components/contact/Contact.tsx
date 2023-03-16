import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaDiscord } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

export function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>andrade.engmecanica@gmail.com</h5>
            <a href="mailto:andrade.engmecanica@gmail.com">Send a message</a>
          </article>
          <article className="contact__option" /* target="_blank" */>
            <FaDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>andrade#6878</h5>
            <a href="https://discord.com/">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 83 98784 0477</h5>
            <a
              href="https:api.whatsapp.com/send?phone=+83987840477"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
      </div>
    </section>
  )
}
