import React from "react";
import proImg from "./assets/pro-Img.jpg";
import "./Info.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import cv from "./assets/mohit-thakur-resume.pdf";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Info() {
  return (
    <>
      <div className="header">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 1 },
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            ease: "easeIn",
            duration: 1,
          }}
          className="profile"
        >
          <img className="proImg" src={proImg} alt="profile image" />
        </motion.div>
        <motion.div
          className="info"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 1.5 },
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            ease: "easeIn",
            duration: 1,
          }}
        >
          <h1>Mohit thakur</h1>
          <h3>
            <ReactTyped
              // startWhenVisible
              strings={[
                "Coder",
                "Developer",
                "Programmer",
                "Full-stack developer",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h3>
          <span className="icon">
            <a href="https://github.com/mohitthakur07">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/mohit-kumar-thakur-b8b4572b1/">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/mohit._.thakur._.07/">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/mohit.kumarthakur.3958?mibextid=ZbWKwL">
              <FacebookIcon />
            </a>
          </span>
          <p>
            Hello! I'm Mohit Thakur, a passionate full-stack developer with a
            knack for creating dynamic and user-friendly web applications. With
            a strong foundation in both front-end and back-end technologies, I
            specialize in delivering seamless digital experiences from concept
            to deployment.
          </p>

          <a href={cv} download>
            <Button
              className="resumeBtn"
              variant="outlined"
              endIcon={<FileDownloadIcon />}
            >
              Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </>
  );
}
