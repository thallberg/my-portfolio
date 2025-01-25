import React from "react";
import { getImageUrl } from "../../utils";
import style from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, description, skills, demo, source, imageSrc },
}) => {
  return (
    <div className={style.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={style.image}
      />
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.skills}>
        {skills.map((skill, id) => {
          <li key={id} className={style.skill}>
            {skill}
          </li>;
        })}
      </ul>
      <div className={style.links}>
        <a className={style.link} href={demo}
        target="_blank">
          Demo
        </a>
        <a className={style.link} href={source}
        target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
