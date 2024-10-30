import { Container, MenuContainer, MenuPlay, MenuHistory, MenuRestart, HeaderContainer, Title } from './styled';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
      <Title>Bingo</Title>
      </HeaderContainer>

      <MenuContainer>
      <MenuPlay>Jogar</MenuPlay>
      <MenuHistory>Histórico</MenuHistory>
      <MenuRestart>Recomeçar</MenuRestart>
      </MenuContainer>
    </Container>
  );
};

export default Header;
