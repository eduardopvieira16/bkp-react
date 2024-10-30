import { Box, Container, Title, Value } from "./styles";

const Content = () => {
  return (
    <Container>
      Dashboard
      <Box>
        <Title>Clientes</Title>
        <Value>1250</Value>
      </Box>
      <Box>
        <Title>Vendas</Title>
        <Value>856</Value>
      </Box>
      <Box>
        <Title>Produtos</Title>
        <Value>324</Value>
      </Box>
      <Box>
        <Title>Faturamento</Title>
        <Value>R$ 985.600</Value>
      </Box>
    </Container>
  );
};

export default Content;
