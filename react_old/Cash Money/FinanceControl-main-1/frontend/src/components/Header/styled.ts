import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;


export const ButtonMenu = styled.button`
  width: 40%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;

  color: var(--text);

  border-radius: 5px;
`;

export const ButtonMenuRevenue = styled(ButtonMenu)`
  border: 1px solid var(--green);
  transition: 0.15s;

  :hover {
    background: var(--green);
    color: var(--white);
  }
`;

export const ButtonMenuExpense = styled(ButtonMenu)`
  border: 1px solid var(--red);
  transition: 0.15s;

  :hover {
    background: var(--red);
    color: var(--white);
  }
`;
