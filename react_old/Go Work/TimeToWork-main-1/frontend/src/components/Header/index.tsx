import { Container, Username, Button } from './styled';

const Header: React.FC = () => {
  return (
    <Container>
      <Username>Eduardo P. Vieira</Username>

      <Button>Sair</Button>
    </Container>
  );
};

export default Header;
