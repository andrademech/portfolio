import './services.css'

export function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-end Development</h3>
          </div>
          <ul className="service__list">
            <li>
              -<p>Development of responsive user interfaces (UI)</p>
            </li>

            <li>
              -
              <p>
                Creation of reusable and scalable components for web and mobile
                applications.
              </p>
            </li>

            <li>
              -
              <p>
                Optimization of web application performance and responsiveness.
              </p>
            </li>

            <li>
              -
              <p>
                Integration with back-end APIs to fetch and display real-time
                data in your applications.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF UX/UI */}

        <article className="service">
          <div className="service__head">
            <h3>Back-end Development</h3>
          </div>
          <ul className="service__list">
            <li>
              -
              <p>
                Development of RESTful APIs: Creation of scalable, flexible, and
                secure APIs with Node
              </p>
            </li>

            <li>
              -
              <p>
                Integration with databases: Connection and integration of your
                application with databases
              </p>
            </li>

            <li>
              -
              <p>
                Authentication and authorization: Implementation of
                authentication and authorization features to ensure the security
                of your application.
              </p>
            </li>

            <li>
              -
              <p>
                Automated testing: Creation of automated tests using tools such
                as Vitest to ensure the quality of your code.
              </p>
            </li>

            <li>
              -<p>Task automation: Creation of automated scripts</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Mobile Aplications</h3>
          </div>
          <ul className="service__list">
            <li>
              -
              <p>
                Development of native mobile applications for iOS and Android
                using React Native
              </p>
            </li>

            <li>
              -
              <p>
                Implementation of custom components for mobile user interfaces
              </p>
            </li>

            <li>
              -
              <p>
                Integration of native features such as GPS, camera, and local
                storage in React Native applications
              </p>
            </li>

            <li>
              -
              <p>
                Development of authentication and session management features in
                mobile applications
              </p>
            </li>

            <li>
              -
              <p>
                Integration with third-party APIs such as social networks,
                payments, and analytics services.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}
