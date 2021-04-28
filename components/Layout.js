/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
