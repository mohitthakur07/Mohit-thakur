import SkillTab from "./skilltab";
import html from "./assets/HTML5_logo.png";
import css from "./assets/CSS3_logo.png";
import js from "./assets/JavaScript-logo.png";
import react from "./assets/React-icon.png";
import bootStrap from "./assets/Bootstrap_logo.png";
import tailwind from "./assets/Tailwind_CSS.png";
import node from "./assets/Node.js_logo.png";
import express from "./assets/Expressjs.png";
import mongoDB from "./assets/MongoDB.png";
import git from "./assets/Git-logo.png";
import "./Skills.css"; // Import the CSS file
import { motion } from "framer-motion";
import StreamIcon from "@mui/icons-material/Stream";

export default function Skills() {
  return (
    <>
      <div className="skillBox">
        <h1>
          Skills <StreamIcon />
        </h1>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 1 },
            delay: 0.5,
            type: "spring",
            stiffness: 50,
            ease: "easeIn",
            duration: 1,
          }}
          className="skills-container"
        >
          <SkillTab skillImg={html} skillName="HTML5" />
          <SkillTab skillImg={css} skillName="CSS3" />
          <SkillTab skillImg={js} skillName="JavaScript" />
          <SkillTab skillImg={react} skillName="React" />
          <SkillTab skillImg={bootStrap} skillName="Bootstrap" />
          <SkillTab skillImg={tailwind} skillName="Tailwind CSS" />
          <SkillTab skillImg={node} skillName="Node.js" />
          <SkillTab skillImg={express} skillName="Express.js" />
          <SkillTab skillImg={mongoDB} skillName="Mongo DB" />
          <SkillTab skillImg={git} skillName="Git" />
        </motion.div>
      </div>
    </>
  );
}
