import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HD;
  background-color: var(--blue-alternative);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-left: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
`;

export const Username = styled.span`
  color: var(--white);
  font-weight: bold;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 4%;
  padding: 0.1rem;
  font-size: 1rem;
  font-weight: bold;
  background: var(--white);
  color: var(--red);
  border-radius: 5px;
  border: 1px solid var(--red);
  transition: 0.15s;

  :hover {
    background: var(--red);
    color: var(--white);
  }
`;
