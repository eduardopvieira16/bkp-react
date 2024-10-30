import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #f4f7fc;
  height: 100vh;
`;

export const Box = styled.div`
  background: white;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #007bff;
  margin-bottom: 10px;
`;

export const Value = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;