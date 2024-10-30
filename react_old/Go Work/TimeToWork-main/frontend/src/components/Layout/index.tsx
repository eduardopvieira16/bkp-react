import RegisterPoint from '../../pages/RegisterPoint';
import Aside from '../Aside';
import Content from '../Content';
import Header from '../Header';

import { Grid } from './styled';

const Layout: React.FC = () => (
  <Grid>
    <Header />
    <Aside />
    <Content>
      <RegisterPoint />
    </Content>
  </Grid>
);

export default Layout;
