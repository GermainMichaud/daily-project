import styled from 'styled-components';

const Form = styled.form((props) => ({
  position: props.position || 'relative',
  bottom: props.bottom || 'inherit',
  display: 'flex',
  flexDirection: props.direction || 'row',
  marginBottom: '1rem',
}));

export default Form;
