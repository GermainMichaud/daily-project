import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonDelete from '../../components/ButtonDelete';
import ProjectLink from './ProjectLink';

const Project = ({ project, remove }) => {
  const [isHover, setIsHover] = useState(false);

  const handleDelete = (event) => {
    event.preventDefault();
    if (window.confirm('Êtes-vous sur de vouloir supprimer ce projet?')) {
      remove(project.id);
    }
  };

  return (
    <ProjectLink
      to={`/${project.name}`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {project.name}
      {isHover ? (
        <ButtonDelete onClick={handleDelete}>Supprimer</ButtonDelete>
      ) : (
        ''
      )}
    </ProjectLink>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Project;
