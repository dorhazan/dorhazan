import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export default function InfoCard(props) {
  const { isMobile } = props;

  const variantsPhone = {
    phone_hidden: {
      y: "100vh",
      opacity: "0",
    },
    phone_vissible: {
      y: "0",
      opacity: "1",
    },
  };

  const variantsWeb = {
    primary_hidden: {
      y: "100vh",
      opacity: "0",
    },
    primary_vissible: {
      y: "0",
      opacity: "1",
    },
    skills_hidden: {
      x: "300px",
      opacity: "0",
    },
    skills_vissible: {
      x: "0",
      opacity: "1",
    },
    extra_skills_hidden: {
      x: "-300px",
      opacity: "0",
    },
    extra_skills_vissible: {
      x: "0",
      opacity: "1",
    },
  };

  return (
    <div className="card-container" id="home">
      {/* Secondary Card of Skills */}
      <motion.div
        className="card-container__secondary card skills"
        variants={isMobile ? variantsPhone : variantsWeb}
        initial={isMobile ? "phone_hidden" : "skills_hidden"}
        animate={isMobile ? "phone_vissible" : "skills_vissible"}
        transition={{ duration: 1.5, delay: isMobile ? "0" : "1.7" }}
      >
        <h3>Skills:</h3>
        <div>
          <span>C#</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Node</span>
          <span>React</span>
          <span>Angular</span>
          <span>ASP.NET MVC</span>
          <span>Express</span>
          <span>MongoDB</span>
        </div>
      </motion.div>

      {/* Primary Card */}
      <motion.div
        className="card-container__primary card"
        variants={isMobile ? variantsPhone : variantsWeb}
        initial={isMobile ? "phone_hidden" : "primary_hidden"}
        animate={isMobile ? "phone_vissible" : "primary_vissible"}
        transition={{ delay: 0.4, duration: 1.5 }}
      >
        <div className="avatar">
          {" "}
          <StaticImage
            className="dor"
            src="../../assets/images/dor.jpeg"
            alt="Dor Hazan"
          />
        </div>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </motion.div>

      {/* Secondary Card of Extra Skills */}
      <motion.div
        className="card-container__secondary card extra-technologies"
        variants={isMobile ? variantsPhone : variantsWeb}
        initial={isMobile ? "phone_hidden" : "extra_skills_hidden"}
        animate={isMobile ? "phone_vissible" : "extra_skills_vissible"}
        transition={{ duration: 1.5, delay: isMobile ? "0.8" : "1.7" }}
      >
        <h3> Extra:</h3>
        <div>
          <span>Material UI</span>
          <span>Chakra UI</span>
          <span>Postman</span>
        </div>
      </motion.div>
    </div>
  );
}
