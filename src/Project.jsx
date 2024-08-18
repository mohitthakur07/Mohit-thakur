// Project.jsx
import ProjectTab from "./ProjectTab";
import "./Project.css"; // Assuming you have a CSS file for styling

export default function Project() {
  const projects = [
    {
      title: "Book Hub",
      description: "Book Hub connects students to share and explore books.",
      imageUrl: "/path-to-weather-app-image.jpg",
      techStack: ["React", "CSS", "API"],
      projectLink: "https://your-weather-app-link.com",
    },
    {
      title: "SkyCast",
      description:
        "A weather forecasting app built with React and the OpenWeather API.",
      imageUrl: "/path-to-weather-app-image.jpg",
      techStack: ["React", "CSS", "API"],
      projectLink: "https://your-weather-app-link.com",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my projects and skills.",
      imageUrl: "/path-to-portfolio-image.jpg",
      techStack: ["React", "CSS", "JavaScript"],
      projectLink: "https://your-portfolio-link.com",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
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
      </div>
    </div>
  );
}
