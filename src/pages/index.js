import * as React from "react";
import { useEffect, useState } from "react";
import "./styles.scss";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Components
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const [heroWasActivated, setHeroWasActivated] = useState(false);
  const [projectsWasActivated, setProjectsWasActivated] = useState(false);
  const [resumeWasActivated, setResumeWasActivated] = useState(false);
  const [contactWasActivated, setContactWasActivated] = useState(false);

  const [heroSectionRef, heroSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: "-180px",
  });
  const [projectsSectionRef, projectsSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: isMobile ? "-180px" : "-300px",
  });
  const [resumeSectionRef, resumeSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: isMobile ? "-180px" : "-300px",
  });
  const [contactSectionRef, contactSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: isMobile ? "-180px" : "-300px",
  });

  // Framer Motion Animations
  const projectsSectionAnimation = useAnimation();
  const resumeSectionAnimation = useAnimation();
  const contactSectionAnimation = useAnimation();

  useEffect(() => {
    if (projectsSectionInView && !projectsWasActivated) {
      projectsSectionAnimation.start("visible");
      setProjectsWasActivated(true);
      console.log("projects is visible");
      console.log(`wasActivated: ${projectsWasActivated}`);
    }
  }, [projectsSectionAnimation, projectsSectionInView]);

  useEffect(() => {
    if (resumeSectionInView && !resumeWasActivated) {
      resumeSectionAnimation.start("visible");
      setResumeWasActivated(true);
      console.log("projects is visible");
      console.log(`wasActivated: ${resumeWasActivated}`);
    }
  }, [resumeSectionAnimation, resumeSectionInView]);

  useEffect(() => {
    if (contactSectionInView && !contactWasActivated) {
      contactSectionAnimation.start("visible");
      setContactWasActivated(true);
      console.log("projects is visible");
      console.log(`wasActivated: ${contactWasActivated}`);
    }
  }, [contactSectionAnimation, contactSectionInView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 72 },
  };

  return (
    <main className="main-app">
      <div className="main-app__container">
        <div className="main-app__container__hero-wrapper" ref={heroSectionRef}>
          <title>Dor Hazan</title>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Dor Hazan
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Full-Stack Developer
          </motion.h2>

          <InfoCard
            // heroSectionAnimation={heroSectionAnimation}
            isMobile={isMobile}
          />
        </div>

        <NavBar
          heroSectionInView={heroSectionInView}
          projectsSectionInView={projectsSectionInView}
          resumeSectionInView={resumeSectionInView}
          contactSectionInView={contactSectionInView}
        />

        <Projects
          projectsSectionRef={projectsSectionRef}
          projectsSectionAnimation={projectsSectionAnimation}
          isMobile={isMobile}
          variants={variants}
        />

        <Resume
          resumeSectionRef={resumeSectionRef}
          resumeSectionAnimation={resumeSectionAnimation}
          isMobile={isMobile}
          variants={variants}
        />

        <Contact
          contactSectionRef={contactSectionRef}
          contactSectionAnimation={contactSectionAnimation}
          isMobile={isMobile}
          variants={variants}
        />

        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
