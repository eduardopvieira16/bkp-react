import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: var(--blue);
  position: relative;
`;

export const Header = styled.header`
  height: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--white);
  margin-top: 1.8rem;
`;

export const MenuContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  align-items: center;
`;

export const MenuItemLink = styled.a`
  margin: 10px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;
  cursor: pointer;
  color: var(--white);
`;
