import PropTypes from "prop-types";
import "./Skills.css"; // Import the CSS file

export default function SkillTab({ skillImg, skillName }) {
  return (
    <div className="skill-tab">
      <img src={skillImg} alt={`${skillName} logo`} className="skill-img" />
      <p>{skillName}</p>
    </div>
  );
}

SkillTab.propTypes = {
  skillImg: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
};
