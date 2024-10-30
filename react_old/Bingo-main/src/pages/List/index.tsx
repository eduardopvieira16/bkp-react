import { CardNumber, Container, Memo, TitleNumber } from "./styled";

const List: React.FC = () => {
  return (
    <Container>
      <CardNumber>
        <TitleNumber>Números Sorteados</TitleNumber>
        <Memo>52</Memo>
      </CardNumber>
    </Container>
  );
};

export default List;
