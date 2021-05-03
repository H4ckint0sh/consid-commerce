/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Navbar from './Navbar';
import Footer from './Footer';
import Meta from './Meta';

const Layout = ({ children }) => (
  <>
    <Meta />
    <header>
      <Navbar />
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layout;
