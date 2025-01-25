import React from "react";
import { getImageUrl } from "../../utils";
import style from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, description, member, demo, source, imageSrc },
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
      <ul className={style.members}>
        {member.map((person, id) => (
          <li key={id} className={style.member}>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className={style.githubLink}
            >
              <img
                src={getImageUrl("./assets/contact/githubIcon.png")}
                alt="Github icon"
                className={style.githubIcon}
              />
              {`${person.name}'s GitHub`}
            </a>
          </li>
        ))}
      </ul>
      <div className={style.links}>
        <a
          className={style.link}
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          className={style.link}
          href={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
