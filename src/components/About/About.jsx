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
                optimizing websites.
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
              <p>i hade expreience developing API,s</p>
            </div>
          </li>

          <li className={style.aboutItem}>
            <img src={getImageUrl("./assets/about/uiIcon.png")} alt="Ui icon" />
            <div className={style.aboutItemText}>
              <h3>UI/UX Design</h3>
              <p>
                I have designed multiple landing pages with a focus on user
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
