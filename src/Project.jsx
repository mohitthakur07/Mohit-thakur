import { motion } from "framer-motion";
import ProjectTab from "./ProjectTab";
import bookHub from "./assets/book-hub.png";
import weatherImg from "./assets/weather-img.jpg";
import Wonderlust from "./assets/Wonderlust.jpg";
import AssignmentIcon from "@mui/icons-material/Assignment";

import "./Project.css";
export default function Project() {
  const projects = [
    {
      title: "Book Hub",
      description:
        "Book Hub is a platform for connecting students and book enthusiasts to share and explore a diverse collection of books.",
      imageUrl: bookHub,
      techStack: ["HTML", "CSS", "Js", "ejs", "express.js", "mongo.db"],
      projectLink: "https://book-hub-9670.onrender.com/",
    },
    {
      title: "SkyCast",
      description:
        "A weather forecasting app built with React and the OpenWeather API.",
      imageUrl: weatherImg,
      techStack: ["React", "CSS", "API"],
      projectLink: "https://skyCast.com",
    },
    {
      title: "Wonderlust",
      description:
        "Wonderlust is a web platform designed to help users find and explore available rooms. This platform allows users to search for rooms, view details, and connect with room owners directly.",
      imageUrl: Wonderlust,
      techStack: ["full-stack web platform"],
      projectLink: "https://github.com/mohitthakur07/Wonderlust",
    },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "My personal portfolio website showcasing my projects and skills.",
    //   imageUrl: "/path-to-portfolio-image.jpg",
    //   techStack: ["React", "CSS", "JavaScript"],
    //   projectLink: "https://your-portfolio-link.com",
    // },
    // Add more projects as needed
  ];

  return (
    <div className="projects-section">
      <h2>
        Projects <AssignmentIcon />
      </h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          opacity: { duration: 1.5 },
          delay: 0.2,
          type: "spring",
          stiffness: 50,
          ease: "easeIn",
          duration: 1,
        }}
        className="projects-container"
      >
        {projects.map((project, index) => (
          <ProjectTab
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techStack={project.techStack}
            projectLink={project.projectLink}
          />
        ))}
      </motion.div>
    </div>
  );
}
