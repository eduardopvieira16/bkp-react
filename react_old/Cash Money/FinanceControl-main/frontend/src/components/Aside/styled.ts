import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: var(--white);
  position: relative;
`;

export const Header = styled.header`
  height: 3rem;
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--black);
  margin-top: 1.5rem;
`;

export const BalanceContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export const Balance = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  font-weight: bold;
  margin-top: 1.5rem;
`;

export const CurrentBalance = styled(Balance)`
  font-size: 1.8rem;
  color: var(--silver);

  margin-top: 5rem;
`;

export const Current = styled(Balance)`
  font-size: 1rem;
  color: var(--silver);

  margin-top: 0.5rem;
`;


export const BalanceTitle = styled(Balance)`
  font-size: 2.5rem;
  color: var(--black);
`;

export const BalanceTitleRevenue = styled(BalanceTitle)`
    color: var(--green);
`;

export const BalanceTitleExpense = styled(BalanceTitle)`
    color: var(--red);
`;

export const BalanceAvailable = styled(Balance)`
  font-size: 1.5rem;
  color: var(--black);
`;

export const BalanceAvailableRevenue = styled(BalanceAvailable)`
    color: var(--green);
`;

export const BalanceAvailableExpense = styled(BalanceAvailable)`
    color: var(--red);
`;
