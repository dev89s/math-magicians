import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => (
  <div className="wrapper">
    <Header />
    <Outlet />
  </div>
);

export default Layout;
