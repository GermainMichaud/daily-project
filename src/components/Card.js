import styled from 'styled-components';

const Card = styled.div({
  position: 'relative',
  width: 'calc(100% - 2rem)',
  padding: '2rem',
  margin: '1rem',
  borderRadius: '.3rem',
  boxShadow: '0 0 20px -5px rgba(0,0,0,.3)',
  color: 'var(--fontColor)',
  backgroundColor: 'var(--bg)',
});

export default Card;
