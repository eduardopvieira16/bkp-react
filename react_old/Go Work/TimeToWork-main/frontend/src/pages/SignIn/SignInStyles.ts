import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;

  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--white-alternative);
`;

const Title = styled.header`
  font-size: 2.2rem;
  font-weight: bold;

  color: var(--blue-alternative);
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;

  margin-top: 0.8rem;
  margin-bottom: 0.8rem;

  color: var(--blue-alternative);
`;

const Input = styled.input`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }

  border: 0.18rem solid var(--blue);
  border-radius: 4px;

  padding: 0.3rem;

  font-size: 1rem;
  font-weight: 700;
  color: var(--blue-alternative);

  background: var(--white-alternative);
`;

const Card = styled.form`
  display: flex;
  flex-direction: column;

  width: 30%;
`;

const Button = styled.button`
  width: 40%;

  font-size: 1.2rem;
  font-weight: bold;
  color: var(--blue);

  border-radius: 4px;
  border: 0.18rem solid var(--blue-alternative);

  margin: 2rem auto;

  background: var(--white-alternative);

  transition: 0.15s;

  cursor: pointer;
`;

const ButtonLogin = styled(Button)`
  :hover {
    background: var(--blue);
    color: var(--white);
    border: 0.18rem solid var(--white-alternative);
  }
`;

export { Container, Title, Label, Input, Card, ButtonLogin };
