import React from "react";
import { getImageUrl } from "../../utils";
import style from "./About.module.css";

const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img
          src={getImageUrl("./assets/about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={style.aboutImage}
        />
        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img
              src={getImageUrl("./assets/about/cursorIcon.png")}
              alt="Cursor icon"
            />
            <div className={style.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building and
                improving websites. I focus on creating websites that are easy
                to use and work well on all devices. I enjoy making websites
                both functional and visually appealing, ensuring they provide a
                good experience for users.
              </p>
            </div>
          </li>

          <li className={style.aboutItem}>
            <img
              src={getImageUrl("./assets/about/serverIcon.png")}
              alt="Server icon"
            />
            <div className={style.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                We are currently taking backend courses, where we are learning
                about APIs and other important aspects of backend development.
              </p>
            </div>
          </li>

          <li className={style.aboutItem}>
            <img src={getImageUrl("./assets/about/uiIcon.png")} alt="Ui icon" />
            <div className={style.aboutItemText}>
              <h3>UI/UX Design</h3>
              <p>
                I have designed several landing pages with a focus on user
                experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
