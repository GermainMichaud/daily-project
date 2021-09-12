import styled from 'styled-components';

const Header = styled.header((props) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '.5rem 1rem',
  backgroundColor: 'var(--bg)',
  zIndex: 99,
}));

export default Header;
