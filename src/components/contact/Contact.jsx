import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_n2rjhs3',
        'template_6g52m3b',
        form.current,
        'I-vyGgeXIW6u_eajY',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me :D</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>andrade.engmecanica@gmail.com</h5>
            <a href="mailto:andrade.engmecanica@gmail.com">Send a message</a>
          </article>
          <article className="contact__option" target="_blank">
            <FaDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>andrade#6878</h5>
            <a href="https://discord.com/">Send a message</a>
          </article>

          <article className="contact__option" target="_blank" rel="noreferrer">
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

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
