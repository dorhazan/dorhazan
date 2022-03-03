import React from "react";
import "./styles.scss";

export default function NavBar(props) {
  const {
    heroSectionInView,
    projectsSectionInView,
    resumeSectionInView,
    contactSectionInView,
  } = props;

  return (
    <div className="navbar">
      <a className={`${heroSectionInView ? "active" : ""}`} href="#home">
        Home
      </a>
      <a
        className={`${projectsSectionInView ? "active" : ""}`}
        href="#projects"
      >
        Projects
      </a>
      <a className={`${resumeSectionInView ? "active" : ""}`} href="#resume">
        Resume
      </a>
      <a className={`${contactSectionInView ? "active" : ""}`} href="#contact">
        Contact
      </a>
    </div>
  );
}
