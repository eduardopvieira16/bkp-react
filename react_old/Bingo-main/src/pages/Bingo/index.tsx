import { useState} from 'react';
import {
  ButtonClear,
  ButtonDrawnNumber,
  CardDrawnNumber,
  CardNumber,
  Container,
  InputDrawn,
  Memo,
} from "./styled";

const Bingo: React.FC = () => {
  //const [numeral, drawnNumber] = useState([]);
  const [drawnNumber, setDrawnNumber] = useState();

  function handlePlay() {
    const DrawnNumber = Math.floor(Math.random() * 75);

    alert(DrawnNumber);
  }
  console.log(handlePlay);

  return (
    <Container>
      <CardDrawnNumber>
        <InputDrawn />
        <ButtonDrawnNumber onClick={handlePlay}>Sortear</ButtonDrawnNumber>
      </CardDrawnNumber>

      <CardNumber>
        <Memo />
        <ButtonClear type="reset">Limpar sorteio</ButtonClear>
      </CardNumber>
    </Container>
  );
};

export default Bingo;
