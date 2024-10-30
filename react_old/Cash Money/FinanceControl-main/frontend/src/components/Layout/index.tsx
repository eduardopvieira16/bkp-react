import { Grid } from './styled';

import Aside from '../Aside';
import Content from '../Content';
import Header from '../Header';

import Expenses from '../../pages/Expenses/index';
import Revenue from '../../pages/Revenue';


const Layout: React.FC = () => (
  <Grid>
    <Header />
    <Aside />
    <Content>
      <Expenses />
    </Content>
  </Grid>
);

export default Layout;
