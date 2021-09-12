import styled from 'styled-components';

const Textarea = styled.textarea({
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  minWidth: '100%',
  maxHeight: '200px',
  padding: '.5rem 1rem',
  border: 'none',
  borderBottom: '2px solid var(--fontColor)',
  fontFamily: 'inherit',
  fontSize: '2rem',
  color: 'var(--bg)',
  background: 'var(--bg-revert)',
});

export default Textarea;
