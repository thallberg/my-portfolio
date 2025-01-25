import React from "react";
import style from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hi, iam Tobbe</h1>
        <p className={style.description}>iam a junior fullstack developer</p>
        <a href="mailto:myemail@email.com" className={style.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("./assets/hero/heroimage.png")}
        alt="Hero image of me"
        className={style.heroImg}
      />
      <div className={style.topBlur}></div>
      <div className={style.bottomBlur}></div>
    </section>
  );
};

export default Hero;
