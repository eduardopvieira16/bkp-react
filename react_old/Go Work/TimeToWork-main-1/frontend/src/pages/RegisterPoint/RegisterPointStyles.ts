import styled from 'styled-components';

const TimeRegister = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 8rem auto;
`;
const Title = styled.span`
  font-size: 1.8rem;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;

  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  color: var(--blue);
`;
const RegisterContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1.5rem;
`;
const DateContainer = styled.span`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 700;

  color: var(--blue);
`;
const TimeContainer = styled.span`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 600;

  color: var(--blue);

  button {
    width: 15%;
    height: 30px;

    background: var(--white);
    color: var(--blue);
    font-size: 1.2rem;
    font-weight: bold;

    border: 2px solid var(--blue);
    border-radius: 5px;

    transition: 0.15s;
  }

  button:hover {
    background: var(--blue);
    color: var(--white);
    border: 0.18rem solid var(--white-alternative);
  }
`;
const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;

  margin: 2rem;
  color: var(--blue);
`;
const Input = styled.span`
  width: 8%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 4px;
  border: 2px solid var(--blue);

  padding: 0.5rem;

  font-size: 1.3rem;
  font-weight: 600;
  color: var(--blue);
`;

export {
  TimeRegister,
  Title,
  RegisterContainer,
  DateContainer,
  TimeContainer,
  Label,
  Input,
};
