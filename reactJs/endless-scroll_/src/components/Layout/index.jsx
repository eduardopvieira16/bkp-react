import Content from "../Content";
import Header from "../Header";
import UserList from "../UserList";
import { Container as LayoutContainer } from "./style";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <UserList />  
      </Content>
    </LayoutContainer>
  );
};

export default Layout;
