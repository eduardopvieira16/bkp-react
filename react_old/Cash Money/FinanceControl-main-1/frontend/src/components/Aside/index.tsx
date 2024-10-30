import {
  Container,
  Header,
  Title,
  BalanceContainer,
  BalanceTitleRevenue,
  BalanceTitleExpense,
  BalanceAvailableRevenue,
  BalanceAvailableExpense,
  CurrentBalance,
  Current

} from './styled';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Saldo de lançamentos</Title>
      </Header>

      <BalanceContainer>
        <BalanceTitleRevenue>Receita</BalanceTitleRevenue>
        <BalanceAvailableRevenue>R$ 5000,00</BalanceAvailableRevenue>
        <BalanceTitleExpense>Despesa</BalanceTitleExpense>
        <BalanceAvailableExpense>R$ 2500,00</BalanceAvailableExpense>
      </BalanceContainer>

      <CurrentBalance>Saldo Atual</CurrentBalance>
      <Current>R$ 2500,00</Current>
    </Container>
  );
};

export default Aside;
