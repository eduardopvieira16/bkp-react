import styled from 'styled-components';

export const Grid = styled.div`
  /**
  Layout template area
  AS = Aside
  HD = Header
  CT = Content
  */
  display: grid;
  grid-template-columns: 150px auto;
  grid-template-rows: 100px auto;

  grid-template-areas:
    'AS CT'
    'AS CT';

  height: 100vh;
  min-width: 315px;
`;
