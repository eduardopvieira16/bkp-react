import { Grid } from './styled';

import Aside from '../Aside';
import Content from '../Content';

import Products from '../../pages/Products';

const Layout: React.FC = () => (
  <Grid>
    <Aside />
    <Content>
      <Products/>
    </Content>
  </Grid>
);

export default Layout;
