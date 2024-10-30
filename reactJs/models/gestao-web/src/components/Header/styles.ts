import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #1976d2;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

export const NavMenu = styled.nav`
  background-color: #f1f1f1;
  padding: 10px 0;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled.li`
  margin: 0 15px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #1976d2;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
