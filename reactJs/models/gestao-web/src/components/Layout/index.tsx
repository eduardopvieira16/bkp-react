import Content from "../Content";
import Header from "../Header";
import { Container } from "./styles";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};

export default Layout;
