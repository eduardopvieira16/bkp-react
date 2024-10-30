import {
  Container,
  Header,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styled";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Mizu Store</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink>Novo</MenuItemLink>
        <MenuItemLink>Produtos</MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
