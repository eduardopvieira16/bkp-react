import styled from 'styled-components';

export const Grid = styled.div`
  /**
  Layout template area
  AS = Aside
  HD = Header
  CT = Content
  */
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 100px auto;

  grid-template-areas:
    'AS HD'
    'AS CT';

  height: 100vh;
  min-width: 315px;
`;
