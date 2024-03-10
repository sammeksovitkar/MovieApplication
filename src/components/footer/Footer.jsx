import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <a style={{ color: "white", textDecoration: "none" }}>
            <li className="menuItem">About</li>
          </a>
          <a style={{ color: "white", textDecoration: "none" }}>
            <li className="menuItem">Blog</li>
          </a>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="socialIcons">
          <span className="icon">
            <a style={{ color: "white" }}>
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a style={{ color: "white" }}>
              <FaGitlab />
            </a>
          </span>
          <span className="icon">
            <a style={{ color: "white" }}>
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a style={{ color: "white" }}>
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a style={{ color: "white" }}>
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
