import { date } from '../../util/date';
import { dayOfWeek } from '../../util/dayOfWeek';
import { time } from '../../util/time';

import {
  TimeRegister,
  Title,
  RegisterContainer,
  DateContainer,
  TimeContainer,
  Label,
  Input,
} from './RegisterPointStyles';

const RegisterPoint: React.FC = () => {
  return (
    <div>
      <main>
        <Title>Registro de ponto</Title>

        <RegisterContainer>
          <DateContainer>
            <span>{date()}</span>
            <span>{dayOfWeek()}</span>
          </DateContainer>
          <TimeContainer>
            <span>{time()}</span>
            <button type="button">Registrar ponto</button>
          </TimeContainer>
        </RegisterContainer>

        <TimeRegister>
          <Label>Cheguei</Label>
          <Input>08:00</Input>

          <Label>Oba ! Almoço</Label>
          <Input>12:00</Input>

          <Label>Retornei</Label>
          <Input>13:00</Input>

          <Label>Até amanhã</Label>
          <Input>18:00</Input>
        </TimeRegister>
      </main>
    </div>
  );
};

export default RegisterPoint;
