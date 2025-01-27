import React from "react";
import style from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hey, my name is Tobbe</h1>
        <p className={style.description}>I'm studying front-end development.</p>
        <a href="mailto:myemail@email.com" className={style.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("./assets/hero/heroImage1.webp")}
        alt="Hero image of me"
        className={style.heroImg}
        fetchpriority="high"
        loading="eager"
      />
      <div className={style.topBlur}></div>
      <div className={style.bottomBlur}></div>
    </section>
  );
};

export default Hero;
