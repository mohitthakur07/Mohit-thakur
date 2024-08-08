import React from "react";
import VGC from "./assets/vgc-mandi.jpeg";
import SPU from "./assets/spu.jpeg";
import EducationCard from "./EducationCard";
import "./Education.css"; // Import the CSS file
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="edu-box">
      <h1>
        Education <SchoolIcon />
      </h1>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { duration: 1.5 },
          delay: 0.2,
          type: "spring",
          stiffness: 50,
          ease: "easeIn",
          duration: 1,
        }}
        className="education-container"
      >
        <EducationCard
          src={VGC}
          clgName="Himachal Pradesh University (HPU)"
          stream="BCA (Bachelor of Computer Application)"
          session="session: 2021-2024"
          cgpa="CGPA: 8.04"
          link="https://www.vgcmandi.co.in/"
        />
        <EducationCard
          src={SPU}
          clgName="Sardar Patel University, Mandi (SPU)"
          stream="MCA (Master of Computer Application)"
          session="session: 2024-2026"
          link="https://www.spumandi.ac.in/"
        />
      </motion.div>
    </div>
  );
};

export default Education;
