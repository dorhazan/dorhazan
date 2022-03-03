import React from "react";
import "./styles.scss";

// SVG
import Github from "../../assets/svg/github.svg";
import Linkedin from "../../assets/svg/linkedin.svg";
import Gmail from "../../assets/svg/gmail.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a href="mailto:dorhazan99@gmail.com" target="_blank" rel="noreferrer">
          <Gmail
            className="footer__icons__gmail"
            style={{ width: "34px", height: "auto" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/dor-hazan-427279218/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin
            className="footer__icons__linkedin"
            style={{ width: "31px", height: "auto" }}
          />
        </a>

        <a href="https://github.com/dorhazan" target="_blank" rel="noreferrer">
          <Github
            className="footer__icons__github"
            style={{ width: "32px", height: "auto" }}
          />
        </a>
      </div>
      <p>© Dor Hazan - 2022</p>
    </div>
  );
}
