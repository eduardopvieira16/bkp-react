import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardNumber = styled.form`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  margin: 1rem auto;
  padding: 0.5rem;

  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  border: 0.18rem solid var(--white);
`;

export const TitleNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--white);
  margin-top: 1rem;
`;
