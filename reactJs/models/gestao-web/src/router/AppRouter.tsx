import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Client from '../pages/Client';
import Product from '../pages/Product';


function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes" element={<Client />} />
          <Route path="/produtos" element={<Product />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;