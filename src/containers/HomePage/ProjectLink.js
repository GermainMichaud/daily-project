import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectLink = styled(Link)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: 'var(--bg)',
  borderRadius: '.5rem',
  boxShadow: '0 0 20px -5px rgb(0 0 0 / 50%)',
  padding: '1rem',
  fontSize: '2rem',
  fontWeight: 'bolder',
  textAlign: 'center',
  textTransform: 'uppercase',
  overflowWrap: 'anywhere',
});

export default ProjectLink;
