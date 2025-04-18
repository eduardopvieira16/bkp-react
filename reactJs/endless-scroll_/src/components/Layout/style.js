import styled from 'styled-components';

/**
 * Layout
 * HD = Header
 * CT = Content
 */

export const Container = styled.div`
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 100%;

  grid-template-areas:
    'HD'
    'CT';

  height: 100vh;
  min-width: 315px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    grid-template-rows: 70px auto;
    grid-template-columns: 100%;
    grid-template-areas:
      'HD'
      'CT';
  }
`;
