import {
  HeaderContainer,
  MenuItem,
  MenuLink,
  MenuList,
  NavMenu,
  Title,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Sistema de Gestão Web</Title>
      <NavMenu>
        <MenuList>
          <MenuItem>
            <MenuLink href="./../../pages/Dashboard">Dashboard</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="./../../pages/Clientes">Clientes</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="./../../pages/Vendas">Vendas</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="./../../pages/Produtos">Produtos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="./../../pages/Relatorio">Relatórios</MenuLink>
          </MenuItem>
        </MenuList>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
