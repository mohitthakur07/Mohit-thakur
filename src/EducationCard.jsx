import React from "react";
import PropTypes from "prop-types";

const EducationCard = ({ src, clgName, stream, session, cgpa, link }) => {
  return (
    <div className="education-card">
      <img src={src} alt={`${clgName} logo`} />
      <h2>{clgName}</h2>
      <h3>{stream}</h3>
      <p>
        {session} <br />
        {cgpa}
      </p>
      <a href={link}>{link}</a>
    </div>
  );
};

EducationCard.propTypes = {
  src: PropTypes.string.isRequired,
  clgName: PropTypes.string.isRequired,
  stream: PropTypes.string.isRequired,
  session: PropTypes.string.isRequired,
  cgpa: PropTypes.string.isRequired,
};

export default EducationCard;
