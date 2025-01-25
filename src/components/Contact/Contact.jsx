import React from "react";
import { getImageUrl } from "../../utils";
import style from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id="contact" className={style.container}>
      <div className={style.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img
            src={getImageUrl("./assets/contact/emailIcon.png")}
            alt="Email icon"
          />

          <a href="mailto:t.hallberg84@gmail.com">Email me</a>
        </li>

        <li className={style.link}>
          <img
            src={getImageUrl("./assets/contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />

          <a
            href="https://www.linkedin.com/in/torbj%C3%B6rn-hallberg-422167329/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>

        <li className={style.link}>
          <img
            src={getImageUrl("./assets/contact/githubIcon.png")}
            alt="Github icon"
          />

          <a href="https://github.com/thallberg" target="_blank">
            github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
