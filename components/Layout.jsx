import Footer from './Footer';
import Navbar from './Navbar';
import Container from './Container';

const Layout = ({ children }) => {
  return (
    <div className="stickyFooter">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
