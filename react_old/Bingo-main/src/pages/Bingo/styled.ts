import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 5rem;
  padding-right: 10rem;
`;

export const CardDrawnNumber = styled.form`
  display: flex;

  width: 100%;
  height: 60%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardNumber = styled.form`
  display: flex;

  width: 90%;
  height: 80%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;

  font-weight: bold;
  font-size: 1.2rem;
  color: var(--blue);

  border-radius: 4px;

  margin: 2rem auto;

  background: var(--white);

  transition: 0.15s;

  cursor: pointer;
`;

export const ButtonDrawnNumber = styled(Button)`
  width: 40%;
  height: 12%;

  margin-bottom: 10rem;

  background: var(--white);
  color: var(--green);
  border: 0.18rem solid var(--green);

  :hover {
    background: var(--green);
    color: var(--white);
    border: 0.18rem solid var(--green);
  }
`;

export const ButtonClear = styled(Button)`
  width: 60%;
  height: 8%;

  background: var(--white);
  color: var(--red);
  border: 0.18rem solid var(--red);

  :hover {
    background: var(--red);
    color: var(--white);
    border: 0.18rem solid var(--red);
  }
`;

export const InputDrawn = styled.span`
  display: flex;
  flex: 1;

  width: 20%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  //margin: 40% auto;

  font-size: 2.5rem;
  font-weight: 400;
  color: var(--black);
  border: 0.18rem solid var(--black);
`;

export const Memo = styled.span`
  width: 100%;
  height: 50%;

  display: flex;
  flex: 1;

  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;

  margin: 3rem auto;
  padding: 0.5rem;

  font-size: 1.5rem;
  font-weight: 600;
  color: var(--black);
  border: 0.18rem solid var(--black);
`;
