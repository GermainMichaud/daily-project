import styled from 'styled-components';

const Content = styled.main((props) => ({
  display: 'flex',
  flexDirection: props.direction || 'column',
}));

export default Content;
