import Bingo from '../../pages/Bingo';
import Content from '../Content';
import Header from '../Header';

import { Grid } from './styled';

const Layout: React.FC = () => (
  <Grid>
    <Header />
    <Content>
      <Bingo />
    </Content>
  </Grid>
);

export default Layout;
