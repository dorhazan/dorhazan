import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function Contact(props) {
  const { contactSectionRef, contactSectionAnimation, variants } = props;
  return (
    <div className="contact-container" ref={contactSectionRef} id="contact">
      <motion.h2
        animate={contactSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        animate={contactSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Passionate and Curious junior Full-Stack Software Developer, Im highly
        motivated to learn new skills and technologies. Looking to have a career
        in the industry and share my knowledge.
      </motion.p>

      <motion.div
        className="email"
        animate={contactSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Email:{" "}
        <a href="mailto:dorhazan99@gmail.com" target="_blank" rel="noreferrer">
          dorhazan99@gmail.com
        </a>
      </motion.div>
    </div>
  );
}
