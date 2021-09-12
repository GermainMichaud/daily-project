import styled from 'styled-components';

const ButtonDelete = styled.button((props) => ({
  position: 'absolute',
  top: '50%',
  right: '10px',
  width: 'max-content',
  padding: '.2rem .3rem',
  color: '#fff',
  fontSize: '.8rem',
  textTransform: 'uppercase',
  border: 'none',
  backgroundColor: '#bd2929',
  borderRadius: '.6rem',
  transform: 'translateY(-50%)',
}));

export default ButtonDelete;
