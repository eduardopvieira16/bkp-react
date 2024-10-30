import {
  Container,
  Header,
  Title,
  MenuContainer,
  MenuItemLink,
} from './styled';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Time to Work</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink>Registro de ponto</MenuItemLink>
        <MenuItemLink>Relatório Semanal</MenuItemLink>
        <MenuItemLink>Relatório Mensal</MenuItemLink>
        <MenuItemLink>Usuários</MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
