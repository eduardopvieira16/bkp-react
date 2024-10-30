import { Container, ButtonMenuRevenue, ButtonMenuExpense} from './styled';

const Header: React.FC = () => {
  return (
    <Container>
      <ButtonMenuExpense>Despesa</ButtonMenuExpense>
      <ButtonMenuRevenue>Receita</ButtonMenuRevenue>
    </Container>
  );
};

export default Header;
