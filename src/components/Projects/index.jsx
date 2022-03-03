/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export default function Projects(props) {
  const { projectsSectionRef, projectsSectionAnimation, variants } = props;
  return (
    <div className="projects" ref={projectsSectionRef} id="projects">
      <motion.h2
        animate={projectsSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Projects
      </motion.h2>
      <div className="projects__wrapper">
        <motion.div
          className="projects__wrapper__container"
          animate={projectsSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <a target="_blank" rel="noreferrer">
            <StaticImage
              className="preview"
              src="../../assets/images/ChatApp.png"
              alt=""
            />
          </a>
          <h3>TalkBackApp</h3>
          <p>
            TalkBackApp is a Full Stack Chatting App. Uses Socket.io for real
            time communication and stores user details in encrypted format in
            Mongo DB Database.
          </p>

          <a
            href="https://github.com/dorhazan/TalkBackApp"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </motion.div>
        <motion.div
          className="projects__wrapper__container"
          animate={projectsSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <a target="_blank" rel="noreferrer">
            <StaticImage
              className="preview"
              src="../../assets/images/AnimalCatalog.png"
              alt="Edi Hovalot moving company."
            />
          </a>
          <h3>AnimalsCatalog</h3>
          <p>
            Catalog that presents few kinds of animals , ability to Post
            comments and Add/Remove/Edit Animal.
          </p>

          <a
            href="https://github.com/dorhazan/AnimalCatalog"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </motion.div>
      </div>
    </div>
  );
}
