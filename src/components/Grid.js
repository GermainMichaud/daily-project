import styled from 'styled-components';

const Grid = styled.section((props) => ({
  display: 'grid',
  gridTemplateColumns: props.line
    ? '1fr'
    : 'repeat(auto-fit, minmax(250px, 1fr))',
  gridGap: '0.7rem',
  padding: '1rem 0',
  width: '100%',
}));

export default Grid;
