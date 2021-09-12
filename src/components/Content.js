import styled from 'styled-components';

const Content = styled.main((props) => ({
  display: 'flex',
  flexDirection: props.direction || 'column',
  padding: '2rem 3rem',
}));

export default Content;
