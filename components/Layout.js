/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
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
