/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    {children}
  </>
);

export default Layout;
