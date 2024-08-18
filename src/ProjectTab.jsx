// ProjectTab.jsx
import "./ProjectTab.css"; // Assuming you have a CSS file for styling

export default function ProjectTab({
  title,
  description,
  imageUrl,
  techStack,
  projectLink,
}) {
  return (
    <div className="project-tab">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>
  );
}
